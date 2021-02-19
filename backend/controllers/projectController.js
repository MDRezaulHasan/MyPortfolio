const Project = require("../model/projectModel");
// Get all products
//@des Get all Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
// Get one  products
exports.view = async (req, res) => {
  try {
    const project = await Project.findById(req.params.project_id);

    if (!project) {
      return res.status(404).json({
        success: false,
        err: "project is not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      err: "Server error: " + error.message,
    });
  }
};

exports.new = async (req, res) => {
  try {
    const project = new Project({
      title: "Demo name",
      image: "/images/code.jpg",
      description: "Demo description",
      gitHub: "demo url",
      liveUrl :"demo url"
    });

    await project.save();
    res.status(201).json({
      data: project,
    });
  } catch (error) {
    if (error) {
      res.json({
        error: error.message,
        // message: "something worng!"
      });
    }
  }
};

exports.update = async (req, res) => {
  try {
    const { title, image, description, gitHub, liveUrl } = req.body;
    const project = await Project.findById(req.params.project_id);

    // console.log("update Image: ", image)
    if (project) {
      (project.title = title),
        (project.image = image), // This path is regulare url that we can pass if we want
        (project.description = description);
            project.gitHub = gitHub;
                project.liveUrl = liveUrl;
      await project.save();
      res.status(201).json({
        data: project,
      });
    } else {
      res.status(404).json({
        message: "no product found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      error: error.message,
      // message: "something worng!"
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const project = await Project.findById(req.params.project_id);
    if (!project) {
      return res.status(404).json({
        success: false,
        err: "project is not exist",
      });
    }
    await Project.deleteOne({ _id: project._id }, (err) => {
      res.json({
        success: true,
        message: "project deleted",
      });
    });
  } catch (error) {
    if (error) {
      res.json({
        error: error.message,
        // message: "something worng!"
      });
    }
  }
};
