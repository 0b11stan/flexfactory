FROM alpine:latest AS builder

WORKDIR /srv/

RUN apk --no-cache add ca-certificates git
RUN git clone --depth 1 https://github.com/0b11stan/FlexFactory.git flexfactory


FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /srv/flexfactory/www/ .
