release: python manage.py makemigrations && python manage.py migrate
web: gunicorn the_birdhouse.wsgi

serve -s build