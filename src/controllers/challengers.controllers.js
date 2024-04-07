import Challenger from "../models/challengers.models.js";
//get
export const getChallengers = async (req, res) => {
    try {
        const challengers = await Challenger.find();
        return res.send(challengers);
    } catch (error) {
        console.log(error);
        res.send({ message: "Ocurrio un mensaje" });
    }
};

export const createChallenger = async (req, res) => {
    try {
        const challenger = new Challenger(req.body);
        const challengerCreated = await challenger.save();
        return res.send(challengerCreated);
    } catch (error) {
        console.log(error);
        res.send({ message: "Ocurrio un mensaje" });
    }
};