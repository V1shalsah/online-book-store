router.get("/search/:key", async (req, res) => {

    const books = await Book.find({
        $or: [
            { title: { $regex: req.params.key, $options: "i" } },
            { author: { $regex: req.params.key, $options: "i" } },
            { category: { $regex: req.params.key, $options: "i" } }
        ]
    });

    res.json(books);
});