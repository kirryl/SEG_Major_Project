# SEG_Major_Project

To install the react-flask boilerplate and start working on it, follow the steps provided below. 

1. Clone this repository and checkout to branch backend_bambi.
  - `git clone (repo)` 
  - `git pull`
  - `git fetch`
  - `git checkout backend_bambi`
  > Do not change the file structure!!!
3. Make a new directory and call it whatever you want.
4. Make sure you have python, pip, and virtualenv installed on your local environment. there's a lot of dependencies that rely on these, so do not skip them. 
5. cd into your new directory, and now run the command ```virtual venv```
6. Copy the contents of this repo and paste it into the venv folder
7. Run the command ``` source bin/activate```
8. Run the command ```sh run.sh```
9. Visit the specified port and you'll see the boilerplate code. 

@SanchitBembi

## For Mac Users

1. Clone this repository and checkout to branch backend_bambi.
  - `git clone (repo)` 
  - `git pull`
  - `git fetch`
  - `git checkout backend_bambi`
  > Do not change the file structure!!!
2. You'll require the following package managers, virtual enviroments and frameworks
  - pip `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`
    - `python get-pip.py`
  - virtualenv `python -m pip install --user virtualenv`
    - > This is the safest install of virtualenv you can use [this](https://packaging.python.org/guides/installing-using-pip-and-virtualenv/) for more info
  - Flask `pip install -U Flask`
5. cd into `backend_bambi`
6. Run the command ``` source env/bin/activate```
  - Check if its in the right directory with the following `which python` should return with `(yourshiz)/env/bin/python`
7. Run the command ```sh run.sh```
8. Visit the specified port and you'll see the boilerplate code. 
