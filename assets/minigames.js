function alertaDispositivos() {
    const isDesk = window.innerWidth > 600;

    if (isDesk) {
        const resposta = confirm("⚠️AVISO⚠️\n\nEste jogo foi feito para rodar em dispositivos mobile e não pode funcionar corretamente em dispositivos desktop.")

        if (!resposta) {
            alert("Você cancelou a ação, o jogo não será iniciado.")
            return false;

        }
    }
    return true;
}

function alertaDesktop() {
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
        const resposta = confirm("⚠️AVISO⚠️\n\nEste jogo foi feito para rodar em dispositivos desktop e não pode funcionar corretamente em dispositivos mobile.")

        if (!resposta) {
            alert("Você cancelou a ação, o jogo não será iniciado.")
            return false;

        }
    }
    return true;
}
