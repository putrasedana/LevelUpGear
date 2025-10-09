/*
  # Create products table for LevelUpGear

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text, product name)
      - `category` (text, product category)
      - `website_url` (text, optional website URL)
      - `logo_url` (text, optional product image URL)
      - `tool_overview` (text, product description)
      - `key_features` (text array, list of features)
      - `pros` (text array, positive aspects)
      - `cons` (text array, negative aspects)
      - `verdict` (text, final review verdict)
      - `related_videos` (text array, YouTube video IDs)
      - `related_blogs` (jsonb, array of blog objects with title and url)
      - `pricing` (jsonb, array of pricing objects with name, price, and url)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `created_by` (uuid, foreign key to auth.users)

  2. Security
    - Enable RLS on `products` table
    - Add policy for authenticated users to read all products
    - Add policy for admins to create, update, and delete products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL DEFAULT 'Gaming Headset',
  website_url text,
  logo_url text,
  tool_overview text NOT NULL,
  key_features text[] DEFAULT '{}',
  pros text[] DEFAULT '{}',
  cons text[] DEFAULT '{}',
  verdict text NOT NULL,
  related_videos text[] DEFAULT '{}',
  related_blogs jsonb DEFAULT '[]',
  pricing jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow all authenticated users to read products
CREATE POLICY "Anyone can read products"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow admins to insert products (simplified - check by email)
CREATE POLICY "Admins can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'putrasedana03@gmail.com'
    )
  );

-- Allow admins to update products
CREATE POLICY "Admins can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'putrasedana03@gmail.com'
    )
  );

-- Allow admins to delete products
CREATE POLICY "Admins can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'putrasedana03@gmail.com'
    )
  );

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();