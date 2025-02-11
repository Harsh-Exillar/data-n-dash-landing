
const SPREADSHEET_ID = '1BJlr4mYeg0IrDnwJsI7V5Y3MtyYcCkmaSFlguFfU5Q4';
const SHEET_ID = 'Sheet1'; // Assuming first sheet
const API_KEY = 'AIzaSyBv_3O8qDmzXD6Zj3iOGXTGFZPxqaKqPX8'; // This is a public API key for reading only

interface Event {
  title: string;
  description: string;
  venue: string;
  date: string;
}

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_ID}?key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    const data = await response.json();
    const rows = data.values || [];
    
    // Skip header row and take up to 3 events
    const events = rows.slice(1, 4).map((row: string[]) => ({
      title: row[0] || 'Unknown Title',
      description: row[1] || 'No description available',
      venue: row[2] || 'TBD',
      date: row[3] || 'TBD',
    }));

    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};
