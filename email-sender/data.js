import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const auth = new google.auth.GoogleAuth({
    keyFile: "./google.json",
    scopes: [`https://www.googleapis.com/auth/spreadsheets`],
});

async function writeToSheet(values) {
    const sheets = google.sheets({ version: "v4", auth });
    // const spreadsheetId = process.env.SPREADSHEET_ID;
    const spreadsheetId = "1rKpPvZOI_Gdf-go1FB-tp8t1gUzwzoKkGwX7xOroRDo";
    const range = "Sample!A1";
    const valueInputOption = "USER_ENTERED";

    const resource = { values };

    try {
        const response = await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption,
            resource,
        });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}




const readSheet = async () => {
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = "1rKpPvZOI_Gdf-go1FB-tp8t1gUzwzoKkGwX7xOroRDo";

    const range = `Sample!A1:E10`

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId, range
        })

        const rows = response.data.values;
        return rows;

    } catch (error) {
        console.error(`error :`, error)
    }
}



// (async () => {
//     const writer = await writeToSheet([
//         ["Name", "Age", "Location"],
//         ["Ado", "30", "Miami"],
//         ["Pepe", "21", "Singapore"],
//         ["Juna", "32", "Korea"],
//     ]);
//     console.log(writer);
// })();

(async () => {
    const data = await readSheet()
    console.log(data)
})();