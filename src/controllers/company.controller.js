import Company from '../models/company.model.js';

export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCompany = async (req, res) => {
  const { name, location, industry } = req.body;

  const newCompany = new Company({
    name,
    location,
    industry,
  });

  try {
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createBulkCompanies = async (req, res) => {
  try {
    const newCompanies = await Company.insertMany(req.body);
    res.status(201).json(newCompanies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
