const API_KEY = 'AIzaSyCrX4LVSdV5MpgnadcNYmBo6-lVzmfEyzA';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

async function fetchFromGemini(prompt: string): Promise<string> {
  const response = await fetch(`${API_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    })
  });

  if (!response.ok) {
    throw new Error('Failed to generate content');
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

export async function generateTitles(): Promise<string[]> {
  const prompt = `Generate 3 creative and engaging course titles in Indonesian language for an educational platform. The titles should be professional and suitable for academic courses. Return only the titles separated by newlines, without any additional text or formatting.`;
  
  const response = await fetchFromGemini(prompt);
  return response.split('\n').filter(title => title.trim());
}

export async function generateDescription(title: string): Promise<string> {
  const prompt = `Generate a professional and engaging course description in Indonesian language for the following course title: "${title}". The description should be 2-3 sentences long and highlight the key benefits and learning outcomes. Return only the description without any additional text or formatting.`;
  
  return fetchFromGemini(prompt);
}