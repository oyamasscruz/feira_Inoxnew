export default function ProfileCard() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://inoxnew.com.br/wp-content/uploads/2024/07/banner-mobile2.jpg')",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="https://inoxnew.com.br/wp-content/uploads/2024/07/logo.svg"
          alt="logo_inoxnew"
        />
        <div>
          <h2 className="mt-20">Bem vindo a Inoxnew!</h2>
          <ul className="flex flex-col gap-4 mt-10 items-center">
            <li>
              <a
                href="https://wa.me/+5562985824684?text=Olá! Tudo bem? Nos vimos na feira Minas Láctea e resolvi entrar em contato por aqui. Gostaria de saber mais sobre os serviços/produtos de vocês!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white transition"
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
                className="flex flex-col items-center gap-2"
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
                className="flex flex-col items-center gap-2"
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
                className="flex flex-col items-center gap-2"
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
                className="flex flex-col items-center gap-2"
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
                className="flex flex-col items-center gap-2"
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
