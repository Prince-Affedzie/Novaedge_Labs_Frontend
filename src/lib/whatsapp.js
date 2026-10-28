export const whatsappLink = (msg = "Hi NovaEdge Labs, I'd like to discuss a project.") =>
  `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURIComponent(msg)}`;