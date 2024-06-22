release: python manage.py makemigrations && python manage.py migrate
web: gunicorn the_birdhouse.wsgi
web: serve -s build