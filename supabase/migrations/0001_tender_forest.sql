/*
  # Course Management Schema

  1. New Tables
    - `teachers` - Store teacher information
    - `courses` - Store course details
    - `course_materials` - Link courses to materials
    - `course_quizzes` - Link courses to quizzes
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Teachers table
CREATE TABLE IF NOT EXISTS teachers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Teachers can view their own data"
  ON teachers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  start_date date NOT NULL,
  end_date date NOT NULL,
  teacher_id uuid REFERENCES teachers(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Teachers can manage their own courses"
  ON courses
  FOR ALL
  TO authenticated
  USING (teacher_id IN (
    SELECT id FROM teachers WHERE user_id = auth.uid()
  ));

-- Course materials junction table
CREATE TABLE IF NOT EXISTS course_materials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  material_id uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE course_materials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Teachers can manage course materials"
  ON course_materials
  FOR ALL
  TO authenticated
  USING (course_id IN (
    SELECT id FROM courses 
    WHERE teacher_id IN (
      SELECT id FROM teachers WHERE user_id = auth.uid()
    )
  ));

-- Course quizzes junction table
CREATE TABLE IF NOT EXISTS course_quizzes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  quiz_id uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE course_quizzes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Teachers can manage course quizzes"
  ON course_quizzes
  FOR ALL
  TO authenticated
  USING (course_id IN (
    SELECT id FROM courses 
    WHERE teacher_id IN (
      SELECT id FROM teachers WHERE user_id = auth.uid()
    )
  ));