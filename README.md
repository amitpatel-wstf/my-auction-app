
# Auction Bidding Platform

This repository contains two microservices: an **Admin Panel** and an **Auction Bidding** system. The **Auction Bidding** microservice handles the auction process but does not yet include the functionality to determine the winner due to the 1-day time duration requirement.

## Features

### Admin Panel
- Manage auctions, users, and bidding processes.
- Monitor ongoing auctions and bidding activity.

### Auction Bidding
- Place bids on items in real-time.
- View auction details and current highest bids.

## Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/auction-bidding-platform.git
cd auction-bidding-platform
```

### 2. Install Dependencies

Navigate to each microservice directory and install the necessary Node packages:

```bash
# For Admin Panel
cd admin-panel
npm install

# For Auction Bidding
cd ../auction-bidding
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root of each microservice directory with the following variables:

```bash
# .env file

# Backend URL
BACKEND_URL=http://your-backend-url

# Secret Key
SECRET_KEY=your-secret-key
```

Replace `your-backend-url` with the actual backend URL and `your-secret-key` with your secret key.

### 4. Run the Microservices

Navigate to each microservice directory and run the following command to start the services:

```bash
# For Admin Panel
cd admin-panel
npm start

# For Auction Bidding
cd ../auction-bidding
npm start
```

### 5. Access the Services

- **Admin Panel**: Open your browser and navigate to `http://localhost:3000`.
## Future Enhancements

- Implementing the logic to determine the auction winner after a 1-day duration.
- Adding additional features to the Admin Panel for better auction management.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.
