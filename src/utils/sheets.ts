
const SPREADSHEET_ID = '1BJlr4mYeg0IrDnwJsI7V5Y3MtyYcCkmaSFlguFfU5Q4';
const SHEET_RANGE = 'Sheet1!A1:D'; // Updated format to specify columns A through D

// You'll need to replace this with your valid API key
const API_KEY = 'AIzaSyBg7S1b8me1-8PjOVhc0v34bdAp0EK6jhE';

interface Event {
  title: string;
  description: string;
  venue: string;
  date: string;
}

export const fetchEvents = async (): Promise<Event[]> => {
  if (!API_KEY) {
    console.error('Google Sheets API key is not configured');
    return [
      {
        title: 'Sample Event 1',
        description: 'Configure Google Sheets API to see live events',
        venue: 'TBD',
        date: 'TBD',
      },
      {
        title: 'Sample Event 2',
        description: 'Configure Google Sheets API to see live events',
        venue: 'TBD',
        date: 'TBD',
      },
      {
        title: 'Sample Event 3',
        description: 'Configure Google Sheets API to see live events',
        venue: 'TBD',
        date: 'TBD',
      }
    ];
  }

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_RANGE}?key=${API_KEY}`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error(`Failed to fetch events: ${errorData?.error?.message || 'Unknown error'}`);
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
