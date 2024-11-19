## Create virtual environment
```
python3 -m venv env
python -m venv env
```

## Install Dependencies
```
pip install -r requirements.txt
```

## Enable the virtual environment
```
source env/bin/activate
env\Scripts\activate
deactivate
```

## Compiles and hot-reloads for development
```
uvicorn src.main:app --reload
```
