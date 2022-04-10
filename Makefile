.PHONY: help
.DEFAULT_GOAL := help

help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install requirements
	pip install -r requirements.txt

fmt format: ## Run code formatters
	isort backend frontend project manage.py
	black backend frontend project manage.py

lint: ## Run code linters
	isort backend frontend project manage.py
	black backend frontend project manage.py
	isort --check backend frontend project manage.py
	black --check backend frontend project manage.py
	flake8 backend frontend project manage.py
	mypy backend frontend project manage.py
