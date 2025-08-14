# Clone the github repository

git clone https://github.com/dionatanzimmermann/zimmermann_dionatan_final_site.git

# Navigate into the project folder

cd zimmermann_dionatan_final_site

# Build the docker image

docker build -t zimmermann_dionatan_final_site .

# Run the docker image in a container

docker run --name zimmermann_dionatan_coding_assignment14 -p 5575:5575 zimmermann_dionatan_final_site

## OPTIONAL - ONLY TO REMOVE CONTAINER

# Stop docker container

docker stop zimmermann_dionatan_coding_assignment14

# Remove files

docker rm zimmermann_dionatan_coding_assignment14
