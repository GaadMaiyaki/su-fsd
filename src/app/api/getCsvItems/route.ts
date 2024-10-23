import { NextResponse } from 'next/server';
import { parseCSV } from '@/utils';
import fs from 'fs';
import path from 'path';


export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src/data', 'data.csv');
        const data = fs.readFileSync(filePath, 'utf-8');
        const items = parseCSV(data);
        return NextResponse.json(items);
    }
    catch (e) {
        console.error('Error reading or parsing the CSV file:', e); //TODO: log to error monitoring service

        return NextResponse.json({ error: 'Failed to read or parse the CSV file.' }, { status: 500 });
    }
}