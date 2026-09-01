FROM ruby:3.1.6

RUN apt-get update -qq && apt-get install -y \
    build-essential \
    git \
    nodejs

WORKDIR /usr/src/app

EXPOSE 4000
EXPOSE 35729
