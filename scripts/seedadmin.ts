import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { connectDB } from '../lib/mongodb';
import { User } from '../models/User';

interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'editor' | 'viewer';
  isActive: boolean;
  avatar?: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
  };
}

async function seedAdmin() {
  try {
    await connectDB();

    // Check if admin already exists
    const existingAdmin = await User.findOne({
      email: 'amitupadhyay878@gmail.com'
    }).exec();

    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('AMultiqos@1992', 12);

    // Create admin user
    const admin = await User.create({
      name: 'Amit Upadhyay',
      email: 'amitupadhyay878@gmail.com',
      password: hashedPassword,
      role: 'admin' as const,
      isActive: true
    });

    console.log('Admin user created successfully:', admin.email);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  } finally {
    // Close the mongoose connection
    await mongoose.disconnect();
  }
}

seedAdmin();