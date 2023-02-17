const getError = (req, res) => {   
  res.status(404).send("Error 404: Page not found");
}

const postError = (req, res) => {
  res.status(404).send("Error 404: Page not found");
}

const deleteError = (req, res) => {
  res.status(404).send("Error 404: Page not found");
}

const putError = (req, res) => {
  res.status(404).send("Error 404: Page not found");
}

export { getError, postError, deleteError, putError };