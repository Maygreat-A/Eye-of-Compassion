from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

# Database connection configuration
DB_HOST = 'your_db_host'
DB_NAME = 'your_db_name'
DB_USER = 'your_db_user'
DB_PASSWORD = 'your_db_password'

# Database connection function
def connect_to_database():
    return psycopg2.connect(host=DB_HOST, dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD)

# Endpoint for user registration (signup)
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    conn = connect_to_database()
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
        conn.commit()
        return jsonify(message='User registered successfully'), 201
    except psycopg2.Error as e:
        conn.rollback()
        return jsonify(error=str(e)), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
