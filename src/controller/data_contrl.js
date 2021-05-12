const Player = require("../models/models");

exports.createNewPlayer = (req, res) => {
    Player.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newPlayer) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.status(200).json({ message: "New Player has been created succesfully...", newPlayer});
        }
    });
};

// TO GET ALL PlayerS...
exports.fetchPlayers = (req, res) => {
    Player.find({}, (err, Players) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.status(200).json({ message: Players });
        }
    });
};

//TO GET JUST A SINGLE Player...
exports.fetchPlayer = (req, res) => {
    Player.findById(req.params.id, (err, Player) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!Player) {
            return res.status(404).json({ message: "No Player with that detail here, please try again.." });
        } else {
            return res.status(200).json({ Player });
        }
    });
};

// TO UPDATE A Player'S DETAILS
exports.updatePlayer = (req, res) => {
    Player.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, (err, Player) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!Player) {
            return res.status(404).json(
              { message: "Player with this detail is not found in our database, check your info and try again.... "});
        } else {
            Player.save((err, updatedPlayer) => {
                if (err) {
                    return res.status(500).json({ message: err });
                } else {
                    return res.status(200).json(
                      { 
                      message: "Player's details updated successfully...." 
                    });
                }
            });
        }
    });
};

exports.deletePlayer = (req, res) => {
    Player.findByIdAndDelete(req.params.id, (err, Player) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!Player) {
            return res.status(404).json({ message: "There is no Player with these details in our database..." });
        } else {
            return res.status(200).json({ message: "Player's record has suucessfully been deleted from our database..." });
        }
    });
};