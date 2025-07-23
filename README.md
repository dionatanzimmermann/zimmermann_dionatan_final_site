# Clone the github repository
git clone https://github.com/dionatanzimmermann/zimmermann_dionatan_ui_garden_build_checks.git

# Navigate into the project folder
cd zimmermann_dionatan_ui_garden_build_checks

# Build the docker image
docker build -t zimmermann_dionatan_ui_garden_build_checks .

# Run the docker image in a container
docker run --name zimmermann_dionatan_coding_assignment13 -p 8018:8018 zimmermann_dionatan_ui_garden_build_checks


## OPTIONAL - ONLY TO REMOVE CONTAINER ##

# Stop docker container
docker stop zimmermann_dionatan_coding_assignment13

# Remove files
docker rm zimmermann_dionatan_coding_assignment13
