function status(request, response) {
  response.status(200).json({ chave: "são valor" });
}

export default status;
