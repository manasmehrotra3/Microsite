FROM dockerfile/nodejs

MAINTAINER Manas Mehrotra, manas.mehrotra@accenture.com

WORKDIR /Desktop/Design a Microsite/Workspace

# Install Mean.JS Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install Mean.JS packages
ADD package.json /Desktop/Workspace/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /Desktop/Workspace/.bowerrc
ADD bower.json /Desktop/Workspace/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/mean

# currently only works for development
ENV NODE_ENV development

# Port 8080 for server
# Port 35729 for livereload
EXPOSE 3000 35729
CMD ["grunt"]
