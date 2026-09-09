class Funcionario{
    #id;
    #nome;
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }

    get id() {return this.#id;} 

    set nome(nome){
        const formatado = nome.toUppercase();
        if (formatado = "" || formatado.lenght < 3){
            console.log('[ERRO] Nome inválido.'); return;
        }

        return this.#nome = formatado;
    }

    get nome() {return this.#nome;} 

    exibir(){
        console.log(`ID: ${this.id} | Nome: ${this.nome}`);
    }
}

class Veterinario extends Funcionario{
    #crmv;
    constructor(id, nome, crmv){
        super(id, nome);
        this.crmv = crmv;
    }

    get crmv() {return this.#crmv};

    set crmv(crmv){
        const formatado = crmv.toUppercase();
        if (formatado = "" || formatado.lenght < 3){
            console.log('[ERRO] crmv inválido.'); return;
        }

        return this.#crmv = crmv;
    }

    exibir(){
        const infoFuncionario = this.exibir();

        console.log(`${infoFuncionario} | CRMV: ${this.crmv}`);
    }
}

class Animal{
    #nome;
    #especie;
    #idVeterinarioResponsavel;
    constructor(nome, especie, idVeterinarioResponsavel){
        this.nome = nome;
        this.especie = especie;
        this.#idVeterinarioResponsavel = idVeterinarioResponsavel;
    }

    get nome() {return this.#nome;} 

    set nome(nome){
        const formatado = nome.toUppercase();
        if (formatado = "" || formatado.lenght < 3){
            console.log('[ERRO] Nome inválido.'); return;
        }

        return this.#nome = formatado;
    }

    get especie() {return this.#especie;}

    set especie(especie){
        const formatado = especie.toUppercase();
        if (formatado = "" || formatado.lenght < 3){
            console.log('[ERRO] Espécie inválidaa.'); return;
        }

        return this.#especie = formatado;
    }

    get idVeterinarioResponsavel() {return this.#idVeterinarioResponsavel;}

    set idVeterinarioResponsavel(idVet){
        if (!Number.isInteger(idVet) || idVet < 0){
            console.log('[ERRO] ID de veterinário inválido'); return;
        }
    }
}

