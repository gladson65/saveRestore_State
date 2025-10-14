import appModel from "../models/app.models.js";

export async function saveState(req, res) {
    const { userID, state } = req.body;

    try {
        const saved = await appModel.findOneAndUpdate(
            { userID }, 
            { state, lastUpdate: new Date() },
            { upsert: true, new: true }
        )

        return res.status(200).json({message: 'data saved successfully', data:saved});
    }
    catch (error) {
        return res.status(500).json({error: error.message})
    }
}





// import AppState from "../models/AppState.js";

// const router = express.Router();

// router.post("/save", async (req, res) => {
//   const { userId, state } = req.body;

//   try {
//     const saved = await AppState.findOneAndUpdate(
//       { userId },
//       { state, lastUpdated: new Date() },
//       { upsert: true, new: true }
//     );
//     res.json({ success: true, data: saved });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


