import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nome, email, mensagem } = await request.json();

  try {
    await resend.emails.send({
      from: 'Agya Sounds <onboarding@resend.dev>',
      to: 'agyasounds@gmail.com',
      subject: `Nova mensagem de ${nome}`,
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Erro ao enviar email.' }, { status: 500 });
  }
}