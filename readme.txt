# Companies Directory API

This document provides instructions on how to use the API for the Companies Directory.

## API Endpoints

The base URL for the API is `http://localhost:5000/api/companies`.

### GET http://localhost:5000/api/companies

This endpoint retrieves a list of all companies in the directory.

**Example Response:**

```json
[
  {
    "_id": "60d5f3f7a3b4c9a0b4e1b3a0",
    "name": "Tech Solutions Inc.",
    "location": "San Francisco, CA",
    "industry": "Technology"
  },
  {
    "_id": "60d5f4f7a3b4c9a0b4e1b3a1",
    "name": "Innovatech",
    "location": "New York, NY",
    "industry": "Technology"
  }
]
```

### POST http://localhost:5000/api/companies

This endpoint creates a new company in the directory.

**Request Body:**

The request body must be a JSON object with the following properties:

*   `name` (String, required): The name of the company.
*   `location` (String, required): The location of the company.
*   `industry` (String, required): The industry of the company.

**Example Request Body:**

```json
{
  "name": "New Company",
  "location": "Austin, TX",
  "industry": "Software"
}
```

**Example Response:**

A successful request will return a JSON object representing the newly created company, with a status code of 201.

```json
{
  "_id": "60d5f5f7a3b4c9a0b4e1b3a2",
  "name": "New Company",
  "location": "Austin, TX",
  "industry": "Software",
  "__v": 0
}
```

















POST API
=======
   * For a single company: POST http://localhost:5000/api/companies
   * For bulk companies: POST http://localhost:5000/api/companies/bulk

{"name": "Infosys", "location": "Bengaluru", "industry": "IT Services"},
{"name": "Wipro", "location": "Bengaluru, Karnataka", "industry": "IT Services"},
  
[
  {"name": "HCL Technologies", "location": "Noida, Uttar Pradesh", "industry": "IT Services"},
  {"name": "Tech Mahindra", "location": "Pune, Maharashtra", "industry": "IT Services"},
  {"name": "Reliance Industries", "location": "Mumbai, Maharashtra", "industry": "Conglomerate"}
]  

[
  {"name": "Infosys", "location": "Bengaluru", "industry": "IT Services"},
  {"name": "TCS", "location": "Mumbai", "industry": "IT Services"},
  {"name": "Wipro", "location": "Bengaluru", "industry": "IT Services"},
  {"name": "HCL Technologies", "location": "Noida", "industry": "IT Services"},
  {"name": "Tech Mahindra", "location": "Pune", "industry": "IT Services"},
  
  {"name": "Apollo Hospitals", "location": "Chennai", "industry": "Healthcare"},
  {"name": "Fortis", "location": "Delhi", "industry": "Healthcare"},
  {"name": "Max Healthcare", "location": "Gurgaon", "industry": "Healthcare"},
  {"name": "Manipal Hospitals", "location": "Bengaluru", "industry": "Healthcare"},
  {"name": "Narayana Health", "location": "Bengaluru", "industry": "Healthcare"},

  {"name": "HDFC Bank", "location": "Mumbai", "industry": "Banking"},
  {"name": "ICICI Bank", "location": "Mumbai", "industry": "Banking"},
  {"name": "Axis Bank", "location": "Pune", "industry": "Banking"},
  {"name": "SBI", "location": "Mumbai", "industry": "Banking"},
  {"name": "Kotak Mahindra Bank", "location": "Mumbai", "industry": "Banking"},

  {"name": "Tata Motors", "location": "Pune", "industry": "Manufacturing"},
  {"name": "Larsen & Toubro", "location": "Mumbai", "industry": "Manufacturing"},
  {"name": "Bharat Forge", "location": "Pune", "industry": "Manufacturing"},
  {"name": "Mahindra & Mahindra", "location": "Mumbai", "industry": "Manufacturing"},
  {"name": "Godrej", "location": "Mumbai", "industry": "Manufacturing"}
]




