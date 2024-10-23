import { NextResponse } from 'next/server';
import { parseCSV } from '@/utils';
import fs from 'fs';
import path from 'path';


export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src/data', 'data.csv');
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log({ data })
        const items = parseCSV(data);
        console.log({ items })
        return NextResponse.json(items);
    }
    catch (e) {

    }
}