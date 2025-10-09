/*
  # Fix products table RLS policy

  1. Security
    - Drop existing problematic policy that references users table
    - Create new policy using auth.email() function to avoid table permission issues
    - Ensure only admin can insert products without needing users table access
*/

-- Drop the existing problematic policy
DROP POLICY IF EXISTS "Admins can insert products" ON products;

-- Create new policy using auth.email() instead of referencing users table
CREATE POLICY "Allow authenticated admin to insert products" 
ON products FOR INSERT 
TO authenticated 
WITH CHECK (auth.email() = 'putrasedana03@gmail.com' AND created_by = auth.uid());

-- Also fix the other policies to use auth.email() consistently
DROP POLICY IF EXISTS "Admins can update products" ON products;
DROP POLICY IF EXISTS "Admins can delete products" ON products;

CREATE POLICY "Allow authenticated admin to update products" 
ON products FOR UPDATE 
TO authenticated 
USING (auth.email() = 'putrasedana03@gmail.com');

CREATE POLICY "Allow authenticated admin to delete products" 
ON products FOR DELETE 
TO authenticated 
USING (auth.email() = 'putrasedana03@gmail.com');