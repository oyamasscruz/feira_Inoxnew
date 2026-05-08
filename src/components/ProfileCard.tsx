import Logo from "../assets/logo2.svg?react";

type ProfileCardProps = {
  name: string;
  whatsapp: string;
};

export default function ProfileCard({ name, whatsapp }: ProfileCardProps) {
  return (
    <div className="relative min-h-screen bg-blue-950 flex flex-col items-center justify-start pt-5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://inoxnew.com.br/wp-content/uploads/2026/05/fundo-de-tela_reuniao_rev.01-scaled-e1778067048733.jpg')",
        }}
      ></div>
      <div className="relative z-10 flex flex-col w-50 items-center">
        <Logo className="w-35 h-35 text-logoInoxnew" />
        <div className="text-center font-bold text-logoInoxnew">
          <h2 className="mt-5 text-xl">Bem vindo a Inoxnew</h2>
          <ul className="flex flex-col gap-1 mt-2 items-center">
            <li>
              <a
                href={`https://wa.me/${whatsapp}?text=Olá ${name}! Tudo bem? Nos vimos na feira Minas Láctea e resolvi entrar em contato por aqui. Gostaria de saber mais sobre os serviços/produtos de vocês!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white hover:text-logoInoxnew transition"
              >
                <span>Whatsapp</span>
                <img
                  className="w-10 h-10"
                  src="https://inoxnew.com.br/wp-content/uploads/2026/04/whatsapp.png"
                  alt="Whatsapp_logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.inoxnew.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white hover:text-logoInoxnew transition"
              >
                <span>Nosso Site</span>
                <img
                  className="w-10 h-10"
                  src="https://inoxnew.com.br/wp-content/uploads/2026/04/rede.png"
                  alt="Internet_logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/inoxnew/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white hover:text-logoInoxnew transition"
              >
                <span>LinkedIn</span>
                <img
                  className="w-10 h-10"
                  src="https://inoxnew.com.br/wp-content/uploads/2026/03/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/inoxnew/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white hover:text-logoInoxnew transition"
              >
                <span>Instagram</span>
                <img
                  className="w-10 h-10"
                  src="	https://inoxnew.com.br/wp-content/uploads/2026/03/instagram.png"
                  alt="Instagram_logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/inoxnewbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white hover:text-logoInoxnew transition"
              >
                <span>Facebook</span>
                <img
                  className="w-10 h-10"
                  src="https://inoxnew.com.br/wp-content/uploads/2026/03/facebook.png"
                  alt="Facebook_logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps?ll=-16.809598,-49.208351&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=13902005619582446133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white hover:text-logoInoxnew transition"
              >
                <span>Localização</span>
                <img
                  className="w-10 h-10"
                  src="https://inoxnew.com.br/wp-content/uploads/2026/05/mapa.png"
                  alt="Facebook_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
