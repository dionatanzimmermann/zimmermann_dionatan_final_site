# Clone the github repository
git clone https://github.com/dionatanzimmermann/zimmermann_dionatan_ui_garden.git

# Navigate into the project folder
cd zimmermann_dionatan_ui_garden

# Build the docker image
docker build -t zimmermann_dionatan_ui_garden .

# Run the docker image in a container
docker run --name zimmermann_dionatan_coding_assignment12 -p 8083:8083 zimmermann_dionatan_ui_garden


## OPTIONAL - ONLY TO REMOVE CONTAINER ##

# Stop docker container
docker stop zimmermann_dionatan_ui_garden

# Remove files
docker rm zimmermann_dionatan_ui_garden