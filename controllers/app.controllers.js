import appModel from "../models/app.models.js";

// save state data inside the database
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

// Get data from the database
export async function getData(req, res) {

    try {
        const userID = req.params.id;
        const data = await appModel.findOne({userID: userID});
        if (!data) return res.status(404).json({message: "No state data found"});
        return res.status(200).json({state: data.state});
    }
    catch(error) {
        return res.status(500).json({error: error.message});
    }
}
