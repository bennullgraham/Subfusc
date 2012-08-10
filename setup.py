from setuptools import setup


setup(
    name='Subfusc',
    version='0.1dev-r3b8c24d',
    packages=['subfusc', ],
    license='Creative Commons Attribution-Noncommercial-Share Alike license',
    long_description=open('README.md').read(),
    url='https://bgraham.com.au/',
    zip_safe=False,
    include_package_data=True,
    install_requires=['Flask>=0.9', 'Flask-Assets>=0.7', 'PyScss>=1.1.4', 'PyYAML>=3.10'],
)
