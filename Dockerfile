FROM node:20-alpine

# Install and link the charts

COPY . .



RUN yarn install
RUN yarn build

WORKDIR /deploy

# Copy built files from the builder stage
COPY --from=builder /app/dist ./

CMD ["ls", "-la"]