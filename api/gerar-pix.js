export default async function handler(req, res) {
  try {
    const response = await fetch('https://app.sigilopay.com.br/api/v1/pix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-public-key': process.env.PUBLIC_KEY,
        'x-secret-key': process.env.SECRET_KEY
      },
      body: JSON.stringify({
        amount: 1000,
        description: "Compra no site"
      })
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ erro: 'Erro ao gerar pix' });
  }
}
