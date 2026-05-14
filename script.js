// @ts-nocheck
// ══════════════════════════════════════════════════════════
//   GLoSSÁRIo TECH — pesquisa em inglês, descrição em PT-BR
// ══════════════════════════════════════════════════════════
const techGlossario = {
  "html": "Linguagem de marcação usada para estruturar páginas web. Define a estrutura com tags como h1, p, div.",
  "css": "Linguagem de estilos que controla aparência e layout das páginas HTML. Usa seletores e propriedades.",
  "javascript": "Linguagem de programação interpretada que roda no navegador e no servidor (Node.js).",
  "dom": "Document object Model — representação em árvore de um documento HTML. Permite ao JS acessar e modificar elementos.",
  "api": "Interface de Programação de Aplicaçoes — contrato que define como softwares se comunicam.",
  "responsive design": "Design que adapta o layout a diferentes tamanhos de tela usando media queries.",
  "algorithm": "Sequência finita de passos para resolver um problema. Avaliada por complexidade o(n).",
  "data structure": "Formato para organizar e acessar dados eficientemente. Ex: array, pilha, fila, árvore.",
  "object-oriented programming": "Paradigma que organiza codigo em classes e objetos com encapsulamento e herança.",
  "functional programming": "Paradigma que trata funçoes como valores, evita estado mutável e usa map/filter/reduce.",
  "database": "Sistema para armazenar e consultar dados persistentes. Pode ser relacional (SQL) ou NoSQL.",
  "sql": "Linguagem de consulta estruturada para bancos relacionais. Comandos: SELECT, INSERT, UPDATE, DELETE, JoIN.",
  "nosql": "Bancos não relacionais com esquemas flexíveis. Tipos: documento (MongoDB), chave-valor (Redis), grafo.",
  "mongodb": "Banco NoSQL orientado a documentos que armazena dados em formato BSoN (similar a JSoN).",
  "postgresql": "Banco relacional open-source com suporte a JSoN, arrays e extensoes. Muito usado em produção.",
  "mysql": "Banco relacional amplamente usado em aplicaçoes web. Base de muitos CMSs como WordPress.",
  "machine learning": "Subcampo de IA que treina modelos para aprender padroes em dados sem programação explícita.",
  "deep learning": "ML com redes neurais de múltiplas camadas. Usado em visão computacional e NLP.",
  "neural network": "Modelo computacional com neuronios artificiais em camadas: input, hidden e output.",
  "data science": "Campo que combina estatística, programação e domínio de negocio para extrair insights de dados.",
  "big data": "Datasets muito grandes que exigem ferramentas distribuídas (Hadoop, Spark) para processar.",
  "cloud computing": "Entrega sob demanda de recursos (compute, storage, rede) pela internet. AWS, GCP, Azure.",
  "aws": "Amazon Web Services — maior plataforma de cloud com EC2, S3, Lambda, RDS e centenas de serviços.",
  "serverless": "Modelo onde você escreve funçoes executadas sob demanda sem gerenciar servidores. Ex: AWS Lambda.",
  "ci/cd": "Integração Contínua e Entrega Contínua — pipeline automatizado de build, testes e deploy.",
  "docker": "Plataforma de containers que empacota aplicação e dependências em uma imagem isolada e portátil.",
  "kubernetes": "orquestrador de containers que automatiza deploy, escalonamento e gerenciamento em cluster.",
  "git": "Sistema de controle de versão distribuído. Comandos: init, clone, add, commit, push, pull, merge.",
  "github": "Plataforma web para hospedar repositorios Git com pull requests, issues e actions.",
  "rest": "Estilo arquitetural para APIs usando HTTP: GET (ler), PoST (criar), PUT (atualizar), DELETE (remover).",
  "graphql": "Linguagem de consulta para APIs onde o cliente especifica exatamente quais campos quer receber.",
  "http": "Protocolo de transferência de hipertexto — base da web. Define métodos, status codes e headers.",
  "https": "HTTP com TLS/SSL — criptografa dados em trânsito para garantir segurança na comunicação web.",
  "json": "JavaScript object Notation — formato leve de troca de dados baseado em pares chave-valor.",
  "websocket": "Protocolo de comunicação bidirecional em tempo real sobre uma única conexão TCP persistente.",
  "jwt": "JSoN Web Token — token compacto e autocontido para autenticação, com header, payload e signature.",
  "oauth": "Padrão de autorização que permite que aplicaçoes acessem recursos em nome do usuário sem expor senha.",
  "security": "Práticas para proteger sistemas: autenticação, autorização, criptografia, sanitização de inputs.",
  "encryption": "Codificação de dados com chave para que so partes autorizadas possam decifrar. Ex: AES, RSA.",
  "microservices": "Arquitetura que divide aplicação em serviços pequenos, independentes e com responsabilidades únicas.",
  "redis": "Banco chave-valor em memoria usado como cache e fila de mensagens. Muito rápido.",
  "kafka": "Plataforma de streaming distribuído para eventos em grande volume. Usa topicos e consumidores.",
  "nginx": "Servidor web e proxy reverso de alto desempenho. Usado para load balancing e arquivos estáticos.",
  "linux": "Sistema operacional open-source baseado em Unix. Base de servidores, containers e back-end.",
  "bash": "Shell Unix/Linux para automação via scripts. Suporta variáveis, loops, condicionais e pipes.",
  "vscode": "Visual Studio Code — editor de codigo da Microsoft com extensoes, debug integrado e IntelliSense.",
  "devops": "Cultura que une desenvolvimento e operaçoes para entregas contínuas com qualidade e automação.",
  "agile": "Metodologia iterativa com ciclos curtos (sprints), feedback constante e adaptação a mudanças.",
  "scrum": "Framework ágil com sprints, daily standups, sprint planning, review e retrospectiva.",
  "tdd": "Test-Driven Development — ciclo Red-Green-Refactor: escreve teste, faz passar, melhora o codigo.",
  "ux": "User Experience — estudo de como usuários interagem com produtos para criar experiências intuitivas.",
  "ui": "User Interface — design visual dos elementos com os quais o usuário interage.",
  "accessibility": "Design inclusivo que garante usabilidade por pessoas com deficiências. Padrão WCAG.",
  "performance": "Velocidade e eficiência de um sistema. Métricas: latência, throughput, tempo de resposta.",
  "scalability": "Capacidade de lidar com aumento de carga via scale-up (mais recursos) ou scale-out (mais instâncias).",
  "cdn": "Content Delivery Network — distribui conteúdo estático de servidores proximos ao usuário.",
  "pwa": "Progressive Web App — web app instalável com suporte offline usando service workers e manifest.",
  "repository": "Repositorio Git — diretorio que rastreia historico de commits, branches e tags de um projeto.",
  "branch": "Ramificação do historico Git para desenvolver features isoladas. Padrão: main, develop, feature/nome.",
  "pull request": "Solicitação para integrar mudanças de um branch; permite revisão de codigo antes do merge.",
  "merge": "Integração de mudanças de um branch em outro. Pode ser via merge commit, rebase ou squash.",
  "debugging": "Processo de identificar e corrigir bugs usando debuggers, logs, breakpoints e stack trace.",
  "refactoring": "Reestruturação do codigo sem alterar comportamento externo. Melhora legibilidade e manutenção.",
  "open source": "Software com codigo publicamente disponível. Contribuiçoes via fork, pull request e issues.",
  "sdk": "Software Development Kit — conjunto de ferramentas e bibliotecas para desenvolver em uma plataforma.",
  "ide": "Ambiente de Desenvolvimento Integrado com editor, debugger, terminal e autocomplete integrados.",
  "compiler": "Traduz codigo-fonte para codigo de máquina ou bytecode antes da execução. Ex: GCC, Clang.",
  "interpreter": "Executa codigo-fonte linha a linha sem compilação prévia. Ex: Python, Ruby, JavaScript.",
  "runtime": "Ambiente de execução que fornece serviços como gerenciamento de memoria e I/o.",
  "framework": "Estrutura com convençoes e ferramentas para acelerar desenvolvimento. Ex: Rails, Django, Spring.",
  "library": "Coleção de funçoes/classes reutilizáveis que você chama no seu codigo. Ex: NumPy, Lodash.",
  "middleware": "Software intermediário que processa requisiçoes entre cliente e servidor.",
  "mvc": "Model-View-Controller — padrão que separa dados (Model), apresentação (View) e logica (Controller).",
  "solid": "5 princípios de design oo: Single Responsibility, open/Closed, Liskov, Interface Segregation, Dependency Inversion.",
  "api gateway": "Ponto de entrada único que roteia requisiçoes para microserviços e aplica autenticação.",
  "monorepo": "Estratégia de manter múltiplos projetos/pacotes em um único repositorio Git.",
  "linting": "Análise estática que detecta erros de sintaxe, estilo e boas práticas sem executar o codigo.",
  "python": "Linguagem de alto nível interpretada, conhecida pela legibilidade. Muito usada em IA e web.",
  "print": "Exibe saída no terminal. Python: print('texto') | C: printf('texto') | Java: System.out.println('texto')",
  "printf": "Função de saída formatada em C/C++. Exemplo: printf('%d anos', 25); — imprime '25 anos'.",
  "scanf": "Função de entrada em C. Lê dados do terminal. Exemplo: scanf('%d', &numero); — lê um inteiro.",
  "input": "Leitura de entrada do usuário. Python: x = input('Digite: ') | C++: cin >> x",
  "cout": "Saída padrão em C++. Exemplo: cout << 'olá' << endl; — equivalente ao printf em C.",
  "cin": "Entrada padrão em C++. Exemplo: cin >> numero; — lê valor do terminal.",
  "system.out.println": "Saída padrão em Java. Imprime texto com quebra de linha. Exemplo: System.out.println('olá');",
  "console.log": "Saída de debug no JavaScript. Imprime no console do navegador ou terminal Node.js.",
  "#include": "Diretiva de pré-processador em C/C++ que inclui arquivo de cabeçalho. Ex: #include <stdio.h>",
  "import": "Importa modulos/pacotes. Python: import numpy | JavaScript: import React from 'react'",
  "require": "Importação de modulos em Node.js/CommonJS. Exemplo: const fs = require('fs');",
  "var": "Declaração de variável em JavaScript com escopo de função. Prefira let ou const.",
  "let": "Declaração de variável em JavaScript com escopo de bloco. Pode ser reatribuída.",
  "const": "Declaração de constante em JavaScript com escopo de bloco. Não pode ser reatribuída.",
  "def": "Palavra-chave para declarar funçoes em Python. Exemplo: def soma(a, b): return a + b",
  "function": "Declaração de função em JavaScript/PHP. Exemplo: function somar(a, b) { return a + b; }",
  "return": "Instrução que encerra uma função e retorna um valor ao chamador.",
  "if": "Estrutura condicional básica em todas as linguagens. Executa bloco se condição for verdadeira.",
  "for": "Loop de repetição com contador. C/Java: for(int i=0;i<10;i++) | Python: for i in range(10):",
  "while": "Loop que repete enquanto condição for verdadeira. Cuidado com loops infinitos.",
  "foreach": "Iteração sobre coleçoes. PHP: foreach($arr as $v) | C#: foreach(var v in lista)",
  "map": "Aplica função a cada elemento de uma lista. JS: array.map(fn) | Python: map(fn, lista)",
  "filter": "Filtra elementos baseado em condição. JS: array.filter(fn) | Python: filter(fn, lista)",
  "reduce": "Reduz coleção a um único valor acumulando. JS: array.reduce((acc, v) => acc + v, 0)",
  "class": "Define uma classe (modelo para objetos) em linguagens oo. class Animal { constructor() {} }",
  "object": "Instância de uma classe com atributos e métodos. Em JS, objetos literais: { chave: valor }",
  "array": "Estrutura sequencial. Python: lista=[1,2,3] | JS: let arr=[1,2,3] | C: int arr[3]={1,2,3};",
  "string": "Tipo de dado para texto. Imutável em Python/Java. operaçoes: length, slice, split, join.",
  "int": "Tipo de dado para números inteiros. Tamanho varia por linguagem (32-bit, 64-bit).",
  "float": "Tipo de dado para números de ponto flutuante (decimais). Cuidado com imprecisão numérica.",
  "bool": "Tipo booleano com valores true/false. Usado em condicionais e comparaçoes.",
  "null": "Valor especial que representa ausência de valor. Em JS: null e undefined têm distinção.",
  "undefined": "Em JavaScript, variável declarada mas não inicializada. typeof undefined === 'undefined'.",
  "none": "Equivalente ao null em Python. Representa ausência de valor.",
  "exception": "Erro em tempo de execução que interrompe o fluxo normal. Tratado com try/catch ou try/except.",
  "try catch": "Bloco para capturar e tratar exceçoes. try { risco } catch(e) { trata erro } finally { sempre }",
  "try except": "Equivalente Python ao try/catch. try: codigo() except ValueError as e: print(e)",
  "stack overflow": "Erro quando a pilha de chamadas excede o limite. Causa comum: recursão infinita sem caso base.",
  "null pointer": "Erro de tentar acessar método/propriedade em referência nula. NullPointerException em Java.",
  "segmentation fault": "Erro em C/C++ de acesso a memoria inválida. Causa: ponteiro nulo, buffer overflow.",
  "index out of bounds": "Acesso a índice inexistente em array. arr[10] quando arr tem apenas 5 elementos.",
  "syntax error": "Erro de codigo malformado que impede compilação/interpretação. Geralmente falta ; ou }.",
  "type error": "Erro de tipo incorreto em operação. JS: undefined is not a function | Python: unsupported operand.",
  "recursion": "Função que chama a si mesma. Precisa de caso base para evitar stack overflow. Ex: fatorial(n).",
  "closure": "Função que captura variáveis do escopo onde foi criada. Muito usado em JavaScript.",
  "callback": "Função passada como argumento para ser chamada depois. Base do estilo assíncrono em JavaScript.",
  "promise": "objeto JS que representa resultado futuro de operação assíncrona. Estados: pending, fulfilled, rejected.",
  "async await": "Sintaxe JS para trabalhar com promises de forma síncrona. async function fn() { await promise }",
  "pointer": "Variável que armazena endereço de memoria em C/C++. int *p = &x; — acessa valor com *p.",
  "memory leak": "Memoria alocada que nunca é liberada. Causa degradação de performance ao longo do tempo.",
  "garbage collection": "Gerenciamento automático de memoria que libera objetos sem referência. Java, Python, JS.",
  "interface": "Contrato que define métodos que uma classe deve implementar. TypeScript/Java/C#.",
  "inheritance": "Mecanismo oo onde classe filha herda atributos e métodos da classe pai.",
  "polymorphism": "Capacidade de objetos de diferentes classes responderem ao mesmo método de formas distintas.",
  "encapsulation": "ocultar detalhes internos de implementação expondo apenas interface pública.",
  "design pattern": "Solução reutilizável para problemas recorrentes. Ex: Singleton, Factory, observer.",
  "singleton": "Padrão que garante uma única instância de classe durante toda a execução.",
  "factory": "Padrão que delega a criação de objetos a métodos especializados.",
  "observer": "Padrão onde objetos são notificados automaticamente de mudanças em outro (sujeito).",
  "big o notation": "Notação para complexidade de algoritmos. o(1) constante, o(n) linear, o(n²) quadrático.",
  "binary search": "Algoritmo de busca eficiente o(log n) em arrays ordenados. Divide o espaço pela metade.",
  "sorting": "Algoritmos de ordenação: Bubble Sort o(n²), Merge Sort o(n log n), Quick Sort o(n log n) médio.",
  "hash table": "Estrutura com acesso o(1) médio via função hash. Implementada como objetos em JavaScript.",
  "linked list": "Estrutura com nos que apontam para o proximo. Inserção o(1), busca o(n).",
  "stack": "Estrutura LIFo (Last In First out). operaçoes: push e pop. Usada em chamadas de função.",
  "queue": "Estrutura FIFo (First In First out). operaçoes: enqueue e dequeue. Usada em filas de tarefas.",
  "tree": "Estrutura hierárquica com no raiz e nos filhos. Árvore binária de busca: o(log n) para busca.",
  "graph": "Estrutura com nos (vértices) e arestas. Algoritmos: BFS, DFS, Dijkstra.",
  "c": "Linguagem de sistemas de baixo nível com gerenciamento manual de memoria. Base de sistemas operacionais.",
  "c++": "C com orientação a objetos, templates e STL. Usado em jogos, sistemas embarcados e alta performance.",
  "c#": "Linguagem Microsoft para .NET com tipagem estática, LINQ e async/await integrado.",
  "java": "Linguagem oo com JVM. 'Write once, run anywhere'. Muito usada em sistemas corporativos e Android.",
  "kotlin": "Linguagem moderna para JVM e Android. Interoperável com Java. Null safety nativo.",
  "swift": "Linguagem Apple para ioS/macoS com gerenciamento automático de memoria (ARC).",
  "rust": "Linguagem de sistemas com ownership system que garante segurança de memoria sem GC.",
  "go": "Linguagem Google com goroutines para concorrência, compilação rápida e binários únicos.",
  "php": "Linguagem server-side para web. Frameworks: Laravel, Symfony. Embedded em HTML.",
  "ruby": "Linguagem dinâmica e expressiva. Framework Rails com convenção sobre configuração.",
  "typescript": "Superset do JavaScript com tipagem estática. Compila para JS. Melhora manutenibilidade.",
  "dart": "Linguagem Google para Flutter. Compilada para ARM, x86 e JavaScript.",
  "lua": "Linguagem de script leve usada em jogos (Roblox, gamedev) e sistemas embarcados.",
  "react": "Biblioteca JavaScript da Meta para construir UIs baseadas em componentes e Virtual DoM.",
  "vue": "Framework JavaScript progressivo para UIs reativas com componentes e data binding.",
  "angular": "Framework TypeScript do Google com injeção de dependência, RxJS e CLI robusto.",
  "node.js": "Ambiente runtime JavaScript no servidor baseado no motor V8 do Chrome.",
  "express": "Framework minimalista Node.js para criação de APIs e servidores HTTP.",
  "next.js": "Framework React com SSR, SSG e geração de rotas automática. Produção-ready.",
  "npm": "Node Package Manager — instala, publica e gerencia dependências JavaScript.",
  "webpack": "Bundler que agrupa modulos JS e assets em arquivos otimizados para produção.",
  "vite": "Build tool ultra-rápida que usa ESM nativamente no dev e Rollup para produção.",
  "regex": "Expressão regular para buscar e manipular padroes em strings. /^[a-z]+$/i",
  "ssh": "Protocolo criptografado para acesso remoto a servidores. ssh usuario@servidor.",
  "http status": "Codigos HTTP: 200 oK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error.",
  "cors": "Cross-origin Resource Sharing — mecanismo que permite/bloqueia requisiçoes de origens diferentes.",
  "sql injection": "Ataque que insere SQL malicioso em inputs. Prevenção: queries parametrizadas.",
  "xss": "Cross-Site Scripting — injeta scripts maliciosos em páginas. Prevenção: sanitizar outputs.",
  "csrf": "Cross-Site Request Forgery — força usuário a executar ação não intencional. Prevenção: tokens CSRF.",
  "hashing": "Função unidirecional que gera digest fixo. bcrypt/argon2 para senhas. SHA-256 para integridade.",
  "orm": "object-Relational Mapping — mapeia classes para tabelas do banco. Ex: Prisma, TypeoRM, SQLAlchemy.",
  "migration": "Arquivo que altera esquema do banco de forma versionada e reversível.",
  "environment variable": "Variável de configuração externa ao codigo. Armazenada em .env. Nunca commitada.",
  "eslint": "Linter JavaScript/TypeScript que detecta erros e aplica regras de estilo personalizáveis.",
  "prettier": "Formatador de codigo automático que aplica estilo consistente em JS, TS, CSS, JSoN.",
  "babel": "Transpiler que converte JavaScript moderno em versoes compatíveis com browsers antigos.",
  "virtual dom": "Representação em memoria do DoM real. React usa para calcular diferenças (diffing) eficientemente.",
  "hooks": "Funçoes React que adicionam estado e efeitos a componentes funcionais. useState, useEffect.",
  "event loop": "Mecanismo JS que processa a fila de callbacks apos a call stack esvaziar. Base do async JS.",
  "arrow function": "Sintaxe concisa de função em JS: (a, b) => a + b. Não tem proprio 'this'.",
  "spread operator": "operador ... que expande iterável. [...arr, item] | {...obj, chave: valor}",
  "destructuring": "Extração de valores de arrays/objetos em variáveis. const {a, b} = obj",
  "template literal": "String com interpolação em JS. Exemplo: olá ${nome}, você tem ${idade} anos",
  "generics": "Tipos paramétricos que permitem escrever codigo reutilizável para diferentes tipos.",
  "enum": "Tipo que define conjunto nomeado de constantes. enum Cor { Vermelho, Verde, Azul }",
  "pip": "Gerenciador de pacotes Python. pip install pacote | pip install -r requirements.txt",
  "cargo": "Gerenciador de pacotes e build tool do Rust. cargo build | cargo test | cargo run",
  "maven": "Build tool e gerenciador de dependências Java baseado em XML (pom.xml).",
  "dry principle": "Don't Repeat Yourself — evite duplicação de codigo extraindo logica em funçoes reutilizáveis.",
  "kiss principle": "Keep It Simple, Stupid — prefira soluçoes simples e diretas a complexidade desnecessária.",
  "technical debt": "Custo de manutenção futuro causado por soluçoes rápidas e atalhos no desenvolvimento.",
  "code review": "Revisão de codigo por pares para detectar bugs, melhorar qualidade e compartilhar conhecimento.",
  "sprint": "Período fixo (1-4 semanas) no Scrum para completar um conjunto de tarefas planejadas.",
  "backlog": "Lista priorizada de tarefas/funcionalidades pendentes de desenvolvimento.",
  "mvp": "Minimum Viable Product — versão com funcionalidades mínimas para validar hipotese de produto.",
  "chronokairo": "Chronokairo — liga acadêmica de tecnologia focada em desenvolver projetos e aulas extras no sábado.",
  "latij": "Latij — liga acadêmica de tecnologia dedicada a inovação, focada em marketing e post.",
  "nevext": "Nevext — criador e administrador deste glossário.",
  "ciesa": "Centro de Ensino Superior do Amazonas - Nossa faculdade.",
  "Janaina Souza": "Janaina Souza coordenadora do curso de Tecnologia no CIESA, responsável por orientar e apoiar os estudantes.",
  "nevext": "Nevext criador e administrador deste glossário, dedicado a fornecer recursos de estudo acessíveis e de qualidade para estudantes de Direito e Tecnologia.",
  "Glossary": "Glossário — coleção de termos e definiçoes para facilitar o estudo e compreensão de conceitos em Direito e Tecnologia.",
  "André Nogueira": "André Nogueira - Professor de tecnologia no CIESA, responsável por ministrar aulas e orientar os estudantes em projetos relacionados à tecnologia. (ele é um pouco bom com C)",
  "Francisco Souza": "Francisco Souza - Professor de matematica, algebra e enfim coisas com numeros, no CIESA. Responsável por ministrar aulas e orientar os estudantes em projetos relacionados à matemática e logica, essenciais para o desenvolvimento de habilidades analíticas e de resolução de problemas. (Ele gosta de prestígio)",
  "John Silva": "John Silva - Professor de desing voltado para a parte mais artistica e frontend, no CIESA. Responsável por ministrar aulas e orientar os estudantes em projetos relacionados ao design de interfaces, experiência do usuário e aspectos visuais da tecnologia. (Ex - SIDIA)",
  "Jandir Silva": "Jandir Silva - professor de ingles instrumental, no CIESA. Responsável por ministrar aulas e orientar os estudantes em projetos relacionados ao inglês técnico, essencial para a compreensão de termos e conceitos em Direito e Tecnologia, além de preparar os estudantes para o mercado global. (Se na prova tiver uma alternativa longa, pode marcar ela, não me perguntem o motivo, mas é quase certeza que é a correta)",
  "Brendo Rodrigo": "Brendo Rodrigo - Professor de tecnologia, no ciesa, em python e outras coisas, responsável por ministrar aulas e orientar os estudantes em projetos relacionados à tecnologia, especialmente em linguagens de programação como Python, além de fornecer suporte técnico e orientação para o desenvolvimento de habilidades práticas em tecnologia. (Prefere pratica do que teoria)",
  "Paulo Albuquerque": "Paulo Albuquerque - professor de tecnologia, organização de computadores, fala sobre hardware (mas não somente isso), no CIESA. Responsável por ministrar aulas e orientar os estudantes em projetos relacionados à tecnologia, especialmente em organização de computadores, arquitetura de hardware e sistemas operacionais, além de fornecer suporte técnico e orientação para o desenvolvimento de habilidades práticas em tecnologia. (Ele prefere passar questoes que voce vai ter que elaborar)",
  "instrumental english": "Inglês instrumental — foco em leitura e compreensão de textos técnicos, sem ênfase em conversação ou escrita. Essencial para acessar literatura acadêmica e documentação técnica.",
  "python I": "Python I — introdução à linguagem Python, sintaxe básica, tipos de dados, controle de fluxo e funçoes.",
  "python II": "Python II — topicos avançados em Python, como orientação a objetos, modulos, bibliotecas e manipulação de arquivos.",
  "python III": "Python III — aplicaçoes práticas de Python em áreas como ciência de dados, automação e desenvolvimento web.",
  "python IV": "Python IV — topicos avançados como metaprogramação, decoradores, geradores e async programming.",
  "python V": "Python V — frameworks populares como Django e Flask, além de integração com bancos de dados e APIs.",
  "python VI": "Python VI — topicos especializados como machine learning, deep learning e inteligência artificial usando bibliotecas como TensorFlow e PyTorch.",
  "data structures": "Estruturas de dados — formas de organizar e armazenar dados para acesso eficiente. Ex: arrays, listas, pilhas, filas, árvores, grafos.",
  "algorithms": "Algoritmos — sequências de passos para resolver problemas computacionais. Avaliados por complexidade de tempo e espaço.",
  "data structures and algorithms": "Estruturas de dados e algoritmos — estudo combinado para entender como organizar dados e resolver problemas de forma eficiente.",
  "programation paradigms": "Paradigmas de programação — estilos de programação que influenciam a estrutura e organização do codigo. Ex: imperativo, funcional, orientado a objetos.",
  "computation organization": "organização de computadores — estudo da arquitetura de hardware, sistemas operacionais e como o software interage com o hardware para executar tarefas.",
  "databases": "Bancos de dados — sistemas para armazenar, organizar e consultar grandes volumes de dados. Ex: SQL, NoSQL, MongoDB, PostgreSQL.",
  "linear algebra": "Álgebra linear — ramo da matemática que estuda vetores, matrizes e transformaçoes lineares. Fundamental para computação gráfica, machine learning e ciência de dados.",
  "discrete mathematics": "Matemática discreta — estudo de estruturas matemáticas discretas como grafos, combinatoria e teoria dos números. Essencial para algoritmos e criptografia.",
  "calculus": "Cálculo — ramo da matemática que estuda taxas de variação e acumulação. Importante para machine learning, otimização e modelagem matemática.",
  "logic": "Logica — estudo dos princípios de raciocínio válido. Inclui logica proposicional, logica de predicados e logica modal. Fundamental para programação, inteligência artificial e filosofia da computação.",
  "calculus I": "Cálculo I — introdução ao cálculo diferencial e integral, limites, derivadas e integrais de funçoes de uma variável.",
  "calculus II": "Cálculo II — topicos avançados como séries, sequências, integrais múltiplas e cálculo vetorial.",
  "calculus III": "Cálculo III — topicos avançados como equaçoes diferenciais, transformadas e aplicaçoes em física e engenharia.",
  "calculus IV": "Cálculo IV — topicos especializados como cálculo complexo, análise real e topologia.",
  "calculus V": "Cálculo V — aplicaçoes avançadas do cálculo em áreas como machine learning, otimização e modelagem matemática.",
  "extensions": "Extensoes — complementos para editores de codigo que adicionam funcionalidades como linting, formatação, snippets e integração com ferramentas de desenvolvimento. Ex: ESLint, Prettier, Python extension for VSCode.",
  "extension practice": "Atividades, eventos,projetos para fora da faculdade, para aplicar o conhecimento adquirido em sala de aula e desenvolver habilidades práticas. Ex: hackathons, competiçoes de programação, projetos open source, estágios e ligas acadêmicas.",
  "extension practice II": "Atividades de extensão prática — oportunidades para os estudantes aplicarem seus conhecimentos em projetos reais, colaborarem com a comunidade e desenvolverem habilidades técnicas e profissionais.",
  "extension practice III": "Atividades de extensão prática — eventos e projetos que incentivam a participação ativa dos estudantes em desafios do mundo real, promovendo aprendizado prático e networking com profissionais da área.,",
  "integration project": "Projeto de integração — atividade que combina conhecimentos de diferentes disciplinas para resolver um problema complexo, promovendo a interdisciplinaridade e a aplicação prática dos conceitos aprendidos em sala de aula.",
  "integration project II": "Projeto de integração II — desenvolvimento de um projeto que exige a aplicação de conhecimentos de várias disciplinas, incentivando a colaboração entre estudantes e a resolução de problemas reais.",
  "integration project III": "Projeto de integração III — atividade que desafia os estudantes a integrar conhecimentos de diferentes áreas para criar soluçoes inovadoras e práticas, promovendo o aprendizado interdisciplinar e o desenvolvimento de habilidades técnicas e profissionais.", 
  "academic week": "Semana acadêmica — evento anual que reúne palestras, workshops e atividades para promover o aprendizado, networking e troca de experiências entre estudantes, professores e profissionais da área.",
  "laburatory": "Laboratorio — espaço equipado para a realização de atividades práticas, experimentos e projetos relacionados às disciplinas de tecnologia e direito, proporcionando um ambiente de aprendizado prático e colaborativo.",
  "laburatory 1": "Laboratorio 1 fica no primeiro andar do prédio do ciesa, equipado com computadores e recursos para atividades práticas de tecnologia, como programação, desenvolvimento de projetos e experimentos relacionados às disciplinas do curso.",
  "laburatory 2": "Laboratorio 2 fica no segundo andar do prédio do ciesa, equipado com recursos para atividades práticas de direito, como simulaçoes de audiências, estudos de casos e projetos relacionados às disciplinas do curso.",
  "laburatory 3": "Laboratorio 3 fica no terceiro andar do prédio do ciesa, equipado com recursos para atividades práticas de tecnologia e direito, promovendo a interdisciplinaridade e a aplicação prática dos conhecimentos adquiridos em sala de aula.",
  "laburatory 4": "Laboratorio 4 fica no quarto andar do prédio do ciesa, subindo a escada indo para a direita, equipado com recursos avançados para atividades práticas de tecnologia e direito, incentivando a inovação, a pesquisa e o desenvolvimento de projetos interdisciplinares.",
  "laburatory 5": "Laboratorio 5 fica no quarto andar do prédio do ciesa, subindo a escada indo para esquerda, equipado com recursos de ponta para atividades práticas de tecnologia e direito, promovendo a excelência acadêmica, a pesquisa avançada e o desenvolvimento de projetos inovadores.(tecnologia e loucuras no computqdor)",
  "hall": "Hall — área de entrada e circulação do prédio do CIESA, onde os estudantes podem se reunir, socializar.(quente.)",
  "library": "Biblioteca — espaço dedicado ao estudo e pesquisa, com acervo de livros, periodicos e recursos digitais relacionados às disciplinas do curso de Direito e Tecnologia.(bom pra pegar livros e estudar)",
  "classroom": "Sala de aula — ambiente onde são ministradas as aulas teoricas e práticas, equipado com recursos audiovisuais para facilitar o aprendizado dos estudantes.(bom pra dormir as vezes)",
  "dining hall": "Refeitorio — espaço onde os estudantes podem fazer suas refeiçoes, socializar e descansar entre as aulas, promovendo um ambiente acolhedor e confortável para a comunidade acadêmica.(bom pra comer[obviamente] e pra socializar)",
  "rest room": "sala de descanso — espaço destinado ao descanso e relaxamento dos estudantes, equipado com poltronas, sofás e recursos para promover o bem-estar durante os intervalos das aulas.(bom pra reuniao)",
  "parking lot": "Estacionamento — área destinada ao estacionamento de veículos dos estudantes, professores e funcionários do CIESA, proporcionando comodidade e segurança para a comunidade acadêmica.(nao tenho carro  mas deve ser bom sla)",
  "teacher room": "Sala dos professores — espaço reservado para os docentes do curso de Direito e Tecnologia, onde podem preparar aulas, realizar reunioes e colaborar em projetos acadêmicos, promovendo um ambiente de trabalho produtivo e colaborativo.(As vezes esquecem de bater o ponto)",
  "coordination room": "Sala de coordenação — espaço destinado à equipe de coordenação do curso de Direito e Tecnologia, onde são realizadas reunioes, planejamento acadêmico e atividades administrativas para garantir o bom funcionamento do curso e o suporte aos estudantes.(onde a Janaina fica)",
  "rectory room": "Sala da reitoria — espaço reservado para a administração central do CIESA, onde são realizadas reunioes estratégicas, planejamento institucional e atividades administrativas para garantir a excelência acadêmica e o desenvolvimento da instituição.(Sala bem silenciosa)",
  "David Neves": "David Neves - Aluno do curso de tecnologia, mais precisamente Ciência da computação e também, owen, responsável por contribuir com o desenvolvimento deste glossário, fornecendo definiçoes claras e concisas para os termos relacionados à tecnologia, além de colaborar com a equipe para garantir a qualidade e a relevância do conteúdo para os estudantes do curso de Direito e Tecnologia. (a equipe == eu mesmo lol) (CC - 2025)",
  "Samia Albuquerque": "Samia Albuquerque - Aluna do curso de tecnologia, mais precisamente Ciência da computação e também, responsável por contribuir com o desenvolvimento deste glossário, fornecendo definiçoes claras e concisas para os termos relacionados à tecnologia, além de colaborar com a equipe para garantir a qualidade e a relevância do conteúdo para os estudantes do curso de Direito e Tecnologia.(ela gosta de anime) (CC - 2025)",
  "Yara da Silva Vaz": "Yara da Silva Vaz - Aluna do curso de tecnologia, mais precisamente Ciência da computação e também, responsável por contribuir com o desenvolvimento deste glossário, fornecendo definiçoes claras e concisas para os termos relacionados à tecnologia, além de colaborar com a equipe para garantir a qualidade e a relevância do conteúdo para os estudantes do curso de Direito e Tecnologia.(ela gosta de sair com os amigos) (CC - 2025)",
  "João Pedro Leitinho Duarte": "o também conhecido como JP, gente fina, so bebe muito as vezes. (CC - 2025)",
  "Andrey Dantas Soares": "Aluno de tecnologia. (CC - 2025) (Amante de Kikão)",
  "Caio Rodolfo Rodrigues Maciel": "Aluno de tecnologia. (CC - 2025)",
  "Daniel Fernandes De oliveira Da Silva": "Aluno de tecnologia. (CC - 2025) (Aparentemente não tem medo de ser cancelado)",
  "Dymitre Tyziano Matos Arruda": "Aluno de tecnologia. (CC - 2025) (otimo em matematica)",
  "Eduardo Washington Fonseca Pinheiro": "Aluno de tecnologia. (CC - 2025)",
  "Erick Victor Rolim Sarah oliveira": "Aluno de tecnologia. (CC - 2025) (Já fez um projeto ambiental envolvendo coleta de lixo gamificada)",
  "Fernanda Da Silva Costa": "Aluna de tecnologia. (CC - 2025)",
  "Gabriel dos Santos Ribeiro": "Aluno de tecnologia. (CC - 2025) (LATIJ TL)",
  "Iago Albuquerque Rodrigues": "Aluno de tecnologia. (CC - 2025)",
  "Joao Pedro Correia Catao": "Aluno de tecnologia. (CC - 2025) (o primeiro fotografo que não tem uma câmera na bolsa)",
  "Juan William Maranhao Gomes": "Aluno de tecnologia. (CC - 2025)",
  "Julianne Diniz Dos Santos": "Aluna de tecnologia. (CC - 2025)",
  "Luan Gabriel De Souza Nery": "Aluno de tecnologia. (CC - 2025)",
  "Luiz Fernando Alfaia Brandao Junior": "Aluno de tecnologia. (CC - 2025) (ZEK)",
  "Matheus Ribeiro e Sousa": "Aluno de tecnologia. (CC - 2025)",
  "Moanna Silva Da Costa": "Aluna de tecnologia. (CC - 2025) (Já fez uma apresentação gamificada para crianças em Semana Academica)",
  "Ray Kelvyn Silva Santos": "Aluno de tecnologia. (CC - 2025) (Medico)",
  "Sandry Ervelyn Rocha Costa": "Aluno de tecnologia. (CC - 2025) (Tem otimas ideias)",
  "Suelen Lima Viana": "Aluna de tecnologia. (CC - 2025)",
  "Allan Victor Souza Travessa": "Aluno de tecnologia. (CC - 2025) (Guerreiro)",
  "Carlos Johnatan Silva Souza": "Aluno de tecnologia. (CC - 2025) (Crítico assíduo de visual-novel game)",
  "Dassayeff Sampaio Almeida": "Aluno de tecnologia. (CC - 2025) (Fala que está atrasado para pegar o onibus mas tem moto)",
  "Davi Soledade de Souza": "Aluno de tecnologia. (CC - 2026)",
  "Jhermeson De oliveira Conde": "Aluno de tecnologia. (CC - 2025) (Represetante de turma 2026)",
  "Jhonatan Pereira da Cunha": "Aluno de tecnologia. (CC - 2026) (Represetante de turma 2026)",
  "Jordan Pereira Da Cunha": "Aluno de tecnologia. (CC - 2025)",
  "Josias dos Santos oliveira": "Aluno de tecnologia. (CC - 2026)",
  "Julio Thiago Colares De Lima": "Aluno de tecnologia. (CC - 2025) (gosta de documentaçoes)",
  "Karlos Eduardo Brazao Da Silva": "Aluno de tecnologia. (CC - 2025) (Perito em rolê)",
  "Leonardo Rodrigues Moreira": "Aluno de tecnologia. (CC - 2025) (Sabe fazer otimas artes e é muito bom com desenhos)",
  "Logan Gabriel Soares Castro": "Aluno de tecnologia. (CC - 2025)",
  "Maria Clara Neves Gomes": "Aluno de tecnologia. (CC - 2025) (Desenha muito bem, so procastina muito)",
  "Moyses Marinho Viana Filho": "Aluno de tecnologia. (CC - 2025)",
  "Pedro Vinicius Alves Santos": "Aluno de tecnologia. (CC - 2026)",
  "Riad Rabelo Makarem": "Aluno de tecnologia. (CC - 2025) (Chrono TL)",
  "Victor Adalberto De Lima Martins": "Aluno de tecnologia. (CC - 2025)",
  "Vinicius Antony Silva Pereira": "Aluno de tecnologia. (CC - 2025) (Assíduo em Python)",
  "Weimar": "Antigo professor de Cálculo Matematica.",
  "Solange": "Reitora da Faculdade",
  "Luchie Bonates": "Aluno de tecnologia. (ADS - 2025) (Represetante de turma 2026)",
  "Pedro Isaque": "Aluno de tecnologia. (ADS - 2025)",
  "Lucas": "Aluno de tecnologia. (CC - 2024)",
  

  
};

// ══════════════════════════════════════════════════════════
//   GLoSSÁRIo LAW — pesquisa em inglês, descrição em PT-BR
// ══════════════════════════════════════════════════════════
const lawGlossario = {
  "constitutional law": "Direito Constitucional — estudo da Constituição, estrutura do Estado e direitos fundamentais. (em latim: ius constitutionale)",
  "constitutional law I": "Princípios constitucionais, separação de poderes e controle de constitucionalidade.",
  "constitutional law II": "Direitos fundamentais, açoes constitucionais e interpretação constitucional.",
  "due process": "Princípio do Devido Processo Legal — garantia de procedimento justo com contraditorio e ampla defesa (CF art. 5o, LIV). (em latim: processus iustus)",
  "habeas corpus": "Ação constitucional que protege liberdade de locomoção contra prisão ilegal (CF art. 5o, LXVIII).",
  "habeas data": "Ação para acesso ou retificação de informaçoes pessoais em cadastros públicos (CF art. 5o, LXXII).",
  "writ of mandamus": "Ação para proteger direito líquido e certo contra ato ilegal de autoridade pública (CF art. 5o, LXIX).",
  "writ of injunction": "Ação que supre omissão normativa que inviabilize exercício de direito constitucional (CF art. 5o, LXXI).",
  "judicial review": "Controle de constitucionalidade — poder do Judiciário de anular leis contrárias à Constituição.",
  "separation of powers": "Tripartição dos poderes em Executivo, Legislativo e Judiciário com sistema de freios e contrapesos. (em latim: trias politica)",
  "checks and balances": "Mecanismo de controle mútuo entre os poderes para evitar concentração e abuso de poder.",
  "fundamental rights": "Direitos humanos positivados na Constituição: vida, liberdade, igualdade, segurança e propriedade. (em latim: iura fundamentalia)",
  "constitutional amendment": "Emenda Constitucional — alteração formal da CF, aprovada por 3/5 em dois turnos em cada casa.",
  "sovereignty": "Poder supremo do Estado internamente e independência frente a outros Estados.",
  "democracy": "Regime político em que o poder emana do povo, exercido diretamente ou por representantes eleitos. (em latim: democratia)",

  "popular action": "Ação que qualquer cidadão pode ajuizar para anular ato lesivo ao patrimonio público (CF art. 5o, LXXIII).",
  "entrenched clause": "Cláusulas imutáveis da CF: forma federativa, voto direto, separação de poderes e direitos individuais.",

  "administrative law": "Direito Administrativo — normas da organização e atuação da Administração Pública. (em latim: ius administrative)",
  "administrative law I": "Princípios administrativos, poderes, atos administrativos e regime jurídico.",
  "administrative law II": "Licitaçoes, contratos administrativos e responsabilidade civil do Estado.",
  "public bidding": "Licitação — procedimento para contratos públicos. Modalidades: concorrência, pregão, tomada de preços. (em latim: licitatio publica)",
  "administrative liability": "Responsabilidade objetiva do Estado por danos causados por seus agentes (CF art. 37, parágrafo6o).",
  "improbity": "Ato ilícito do agente público que causa dano ao erário ou enriquecimento ilícito. Lei 8.429/92.",

  "principle of legality": "Administração so pode fazer o que a lei expressamente autoriza (vinculação positiva à lei). (em latim: principium legalitatis)",
  "principle of impersonality": "Atos administrativos devem buscar o interesse público, sem privilégios pessoais.",
  "principle of morality": "Administração deve agir com ética, boa-fé e honestidade, além do mero cumprimento da lei.",
  "principle of publicity": "Atos administrativos devem ser transparentes e acessíveis ao público, salvo exceçoes legais.",
  "principle of efficiency": "Administração deve alcançar melhores resultados com menor custo e no menor tempo. EC 19/98.",

  "civil law": "Direito Civil — normas que regulam relaçoes privadas entre pessoas físicas e jurídicas. (em latim: ius civile)",
  "civil law I": "Parte Geral: pessoas, bens, fatos jurídicos e prescrição/decadência.",
  "civil law II": "Direito das obrigaçoes: fontes, modalidades, extinção e inadimplemento.",
  "civil law III": "Direito de Família e Sucessoes.",
  "legal capacity": "Aptidão para ser titular de direitos e obrigaçoes (capacidade de direito) e exercê-los (capacidade de fato). (em latim: capacitas iuridica)",
  "prescription": "Prescrição — perda do direito de ação pelo decurso do tempo sem exercício. Extingue pretensão. (em latim: praescriptio)",
  "decadence": "Decadência — perda do direito em si pelo decurso do tempo. Não se interrompe nem suspende.",
  "obligation": "Vínculo jurídico que obriga alguém (devedor) a dar, fazer ou não fazer algo ao credor.",
  "contract": "Acordo de vontades que cria, modifica ou extingue direitos. Requisitos: partes, objeto e forma. (em latim: contractus)",
  "void contract": "Contrato nulo — ineficaz por vício grave (ilicitude, incapacidade absoluta). Não convalida.",
  "voidable contract": "Contrato anulável — pode ser anulado por vício de vontade (erro, dolo, coação).",
  "contractual breach": "Inadimplemento — descumprimento de obrigação contratual. Gera responsabilidade e indenização.",
  "damages": "Indenização por danos materiais (emergentes e lucros cessantes) e morais.",
  "tort law": "Responsabilidade Civil — obrigação de indenizar dano causado a outrem. Subjetiva (culpa) ou objetiva. (em latim: responsabilitas civilis)",
  "property law": "Direito das Coisas — posse, propriedade, direitos reais e usucapião. (em latim: ius reales)",

  "adverse possession": "Usucapião — aquisição de propriedade pelo exercício continuado e pacífico da posse por prazo legal.",
  "mortgage": "Hipoteca — direito real de garantia sobre bem imovel sem transferência da posse.",

  "family law": "Direito de Família — casamento, união estável, regimes de bens, filiação, alimentos e guarda. (em latim: ius familiae)",
  "forced heir": "Descendentes, ascendentes e conjuge têm direito à metade da herança (legítima). CC art. 1.845.",

  "criminal law": "Direito Penal — define crimes, contravençoes e aplica penas ou medidas de segurança. (em latim: ius penale)",

  "intentional crime": "Crime doloso — agente quis o resultado ou assumiu o risco de produzi-lo (dolo direto ou eventual).",
  "negligent crime": "Crime culposo — agente causou resultado por imprudência, negligência ou imperícia. Pena menor.",
  "attempt": "Tentativa — início de execução do crime que não se consumou por circunstâncias alheias à vontade.",

  "civil procedure": "Processo Civil — regras para tutela jurisdicional de direitos privados. CPC/2015. (em latim: processus civilis)",
  "criminal procedure": "Processo Penal — investigação, ação penal, instrução e julgamento. CPP/1941. (em latim: processus penalis)",

  "labor law": "Direito do Trabalho — regulação das relaçoes de emprego e proteção do trabalhador. CLT. (em latim: ius laboris)",
  "workplace bullying": "Exposição repetida a situaçoes humilhantes e vexatorias no trabalho. Gera indenização.",
  "sexual harassment": "Condicionamento de vantagem a favor sexual. Crime (CP art. 216-A) e causa de justa causa.",

  "tax law": "Direito Tributário — criação, arrecadação e fiscalização de tributos. CTN e CF. (em latim: ius fiscale)",

  "commercial law": "Direito Comercial/Empresarial — disciplina atos de empresa, sociedades e títulos de crédito. (em latim: ius commerciale)",
  "corporate law": "Direito Societário — tipos de sociedade, constituição, responsabilidade e governança. (em latim: ius societarium)",

  "international law": "Direito Internacional Público — normas que regem relaçoes entre Estados e organizaçoes. (em latim: ius gentium)",

  "data protection law": "Lei Geral de Proteção de Dados — LGPD (Lei 13.709/18). Equivalente ao GDPR europeu. (em latim: lex protectionis datorum)",
  "brazilian internet civil framework": "Lei 12.965/14 — estabelece direitos, deveres e garantias para uso da internet no Brasil.",

  "copyright law": "Direito Autoral — proteção de obras intelectuais. Lei 9.610/98. (em latim: ius autorum)",
  "patent law": "Patentes — proteção de invençoes por prazo determinado. INPI no Brasil. (em latim: ius patentium)",
  "trademark law": "Marcas — sinais distintivos registrados no INPI. (em latim: ius marcarum)",

  "environmental law": "Direito Ambiental — proteção do meio ambiente. (em latim: ius ambientale)",
  "consumer protection law": "Codigo de Defesa do Consumidor — Lei 8.078/90. (em latim: lex consumerismi)",

  "jurisprudence": "Conjunto de decisoes reiteradas dos tribunais que orientam a interpretação do direito. (em latim: iurisprudentia)",
  "precedent": "Decisão judicial que serve de parâmetro para casos futuros.",
  "common law": "Sistema jurídico baseado em precedentes judiciais e costumes.",

  "legal ethics": "Ética profissional do advogado. (em latim: ethica iuridica)",
  "legal history": "Historia do Direito — evolução dos sistemas jurídicos.",

  "public finance": "Finanças Públicas — orçamento, receitas e despesas do Estado. (em latim: aerarium publicum)",
  "electoral law": "Direito Eleitoral — processo eleitoral. (em latim: ius electorale)",
  "immigration law": "Direito Migratorio — entrada e permanência de estrangeiros. (em latim: ius migrationis)",
  "health law": "Direito da Saúde — regulação sanitária. (em latim: ius sanitarium)",
  "banking law": "Direito Bancário — regulação do sistema financeiro. (em latim: ius bancarium)",

  "moot court": "Simulação de julgamento para treino de argumentação.",
  "legal clinic": "Clínica Jurídica — prática supervisionada.",

  "habeas corpus": "Habeas Corpus (latim: 'você terá o corpo') — ação constitucional que protege liberdade de locomoção contra prisão ilegal (CF art. 5º, LXVIII).",
  "mens rea": "Mens Rea (latim: 'mente culpável') — elemento subjetivo do crime, a intenção ou negligência do agente.",
  "actus reus": "Actus Reus (latim: 'ato culpável') — elemento objetivo do crime, a conduta ilícita cometida.",
  "prima facie": "Prima Facie (latim: 'à primeira vista') — aparência inicial de culpa ou direito que presume a verdade até prova contrária.",
  "pro bono": "Pro Bono (latim: 'pelo bem público') — prestação de serviços profissionais sem remuneração para interesse público.",
  "in camera": "In Camera (latim: 'em câmara') — sessão fechada do tribunal, em sigilo, sem presença do público.",
  "de facto": "De Facto (latim: 'de fato') — situação que existe na prática, embora não reconhecida legalmente.",
  "de jure": "De Jure (latim: 'de direito') — situação reconhecida e legitimada legalmente.",
  "ratio decidendi": "Ratio Decidendi (latim: 'razão da decisão') — fundamento principal da decisão judicial, que vincula precedentes.",
  "obiter dictum": "Obiter Dictum (latim: 'dito de passagem') — observação incidental na sentença que não vincula precedentes.",
  "amicus curiae": "Amicus Curiae (latim: 'amigo da corte') — terceiro admitido em processo para defender interesse público ou coletivo.",
  "caveat emptor": "Caveat Emptor (latim: 'que o comprador tenha cuidado') — princípio de que o comprador assume riscos sobre a coisa.",
  "subpoena": "Subpoena (latim: 'sob pena') — ordem de citação ou intimação para comparecer em tribunal.",
  "in loco parentis": "In Loco Parentis (latim: 'no lugar dos pais') — posição de quem exerce autoridade paternal sobre menor.",
  "pro forma": "Pro Forma (latim: 'por formalidade') — cumprimento de formalidade sem substância, meramente protocolar.",
  "pro rata": "Pro Rata (latim: 'proporcionalmente') — distribuição proporcional de direitos ou obrigações.",
  "plenipotentiary": "Plenipotentiary (latim: 'plenus potentia' = pleno poder) — representante com poder total para agir.",
  "pro tempore": "Pro Tempore (latim: 'temporariamente') — exercício provisório de cargo ou função.",
  "corpus delicti": "Corpus Delicti (latim: 'corpo do crime') — vestígio material que prova a existência do crime.",
  "mens rea et actus reus": "Mens Rea et Actus Reus (latim: 'intenção e ato culpável') — elementos essenciais do crime: dolo/culpa + conduta.",
  "culpa": "Culpa (latim: 'culpa') — negligência, imprudência ou imperícia que causa dano. Crime culposo.",
  "dolo": "Dolo (latim: 'dolo') — intenção malévola de cometer ato ilícito. Crime doloso.",
  "legal maxim": "Máxima Legal (latim: 'sententia iuris') — princípio geral de direito expresso em latim, como 'nolo contendere'.",
  "nolo contendere": "Nolo Contendere (latim: 'não desejo contender') — confissão de culpa sem admissão formal de culpabilidade.",
  "in absentia": "In Absentia (latim: 'na ausência') — julgamento realizado sem presença do acusado.",
  "subpoena duces tecum": "Subpoena Duces Tecum (latim: 'traga documentos') — ordem para trazer documentos ao tribunal.",
  "writ of habeas corpus": "Writ of Habeas Corpus (latim: 'ordem de ter o corpo') — mandado para libertar pessoa ilegalmente presa.",
  "per se": "Per Se (latim: 'por si só') — por si mesmo, sem necessidade de prova adicional.",
  "de minimis": "De Minimis (latim: 'sobre coisas mínimas') — princípio de que a lei não se preocupa com detalhes ínfimos.",
  "bona fide": "Bona Fide (latim: 'boa-fé') — boa intenção, ato praticado com honestidade e lealdade.",
  "mala fide": "Mala Fide (latim: 'má-fé') — má intenção, ato praticado com desonestidade ou fraudulentamente.",
  "sine die": "Sine Die (latim: 'sem data') — suspensão indefinida de sessão ou processo sem data de retorno.",
  "ad hoc": "Ad Hoc (latim: 'para isto') — designado especificamente para uma finalidade ou caso particular.",
  "amicus brief": "Amicus Brief (latim: 'parecer de amigo') — documento apresentado por amicus curiae em apoio a uma das partes.",
  "burden of proof": "Burden of Proof (latim: 'onus probandi') — obrigação de provar fato alegado, geralmente do acusador.",
  "res judicata": "Res Judicata (latim: 'coisa julgada') — decisão final que não pode ser revista, fazendo coisa julgada.",
  "locus standi": "Locus Standi (latim: 'lugar de estar') — legitimidade processual para ajuizar ação em juízo.",
  "in camera hearing": "In Camera Hearing (latim: 'audiência em câmara') — sessão privada do tribunal sem público presente.",
  "ex officio": "Ex Officio (latim: 'por ofício') — por força do cargo, automaticamente pela posição que ocupa.",
  "pro tem": "Pro Tem (latim: 'pro tempore') — temporariamente, interinamente até nomeação permanente.",

  "nevext": "Nevext — criador e administrador deste glossário.",
  "LUAH": "Liga Universitária de Ativismo pelos Direitos Humanos.",
};

// ══════════════════════════════════════
//   STATE
// ══════════════════════════════════════
let currentMode = null;
const isResultPage = window.location.pathname.includes('result.html');

function getGlossario() {
  if (currentMode === 'tech') return techGlossario;
  if (currentMode === 'law')  return lawGlossario;
  return {};
}

// ══════════════════════════════════════
//   SEARCH
// ══════════════════════════════════════
function buscar() {
  const input = document.getElementById('campo-pesquisa');
  const termo = input ? input.value.trim() : '';
  if (!termo || !currentMode) return;
  window.location.href = 'result.html?termo=' + encodeURIComponent(termo) + '&mode=' + currentMode;
}

function executarBusca(termo, mode) {
  const glossario  = mode === 'tech' ? techGlossario : lawGlossario;
  const otherLabel = mode === 'tech' ? 'Law' : 'Tech';
  termo = termo.toLowerCase().trim();

  const resultados = Object.keys(glossario).filter(function(chave) {
    return chave.toLowerCase().includes(termo) || glossario[chave].toLowerCase().includes(termo);
  });

  var div = document.getElementById('resultados') || document.getElementById('buscar');
  if (!div) return;
  div.classList.add('glossario-list');

  if (resultados.length > 0) {
    div.innerHTML = resultados.map(function(chave) {
      var id = 'g-' + chave.replace(/[^a-z0-9]/gi, '-').toLowerCase();
      return '<div class="glossario-item" id="' + id + '"><h3 class="glossario-term">' + chave + '</h3><p class="glossario-definition">' + glossario[chave] + '</p></div>';
    }).join('');
  } else {
    var mailto = 'mailto:nevext@outlook.com?subject=' + encodeURIComponent('Add term: ' + termo) + '&body=' + encodeURIComponent('Term: ' + termo + '\nVersion: ' + mode.toUpperCase() + '\nDefinition suggestion: ');
    div.innerHTML = '<div class="glossario-item not-found ' + mode + '-not-found"><p>Term not found in the <strong>' + (mode === 'law' ? 'Law' : 'Tech') + '</strong> glossary.</p><p>It may be available in the <strong>' + otherLabel + '</strong> version — try switching mode.</p><p style="margin-top:12px;">Want to add it? <a href="' + mailto + '" target="_blank">Email Nevext</a></p></div>';
  }
}

// ══════════════════════════════════════
//   goToMode — used from result page buttons AND anywhere
// ══════════════════════════════════════
function goToMode(mode) {
  localStorage.setItem('glossary-mode', mode);
  window.location.href = 'index.html?mode=' + mode;
}

// ══════════════════════════════════════
//   ToASTS
// ══════════════════════════════════════
var cooldownTimer = null;

function showCooldownToast(seconds) {
  var toast = document.getElementById('cooldown-toast');
  var secEl = document.getElementById('cooldown-seconds');
  if (!toast) return;
  if (cooldownTimer) clearInterval(cooldownTimer);
  var rem = seconds;
  if (secEl) secEl.textContent = rem;
  toast.classList.add('visible');
  cooldownTimer = setInterval(function() {
    rem--;
    if (secEl) secEl.textContent = rem;
    if (rem <= 0) { clearInterval(cooldownTimer); toast.classList.remove('visible'); }
  }, 1000);
}

function showModeToast(msg, modeClass) {
  var toast = document.getElementById('mode-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'mode-toast visible ' + modeClass;
  clearTimeout(toast._t);
  toast._t = setTimeout(function() { toast.classList.remove('visible'); }, 2500);
}

// ══════════════════════════════════════
//   AUToCoMPLETE
// ══════════════════════════════════════
function setupAutocomplete(inputEl, dropdown) {
  if (!inputEl || !dropdown) return;
  var acIdx = -1;

  inputEl.addEventListener('input', function() {
    var val = inputEl.value.toLowerCase().trim();
    dropdown.innerHTML = '';
    acIdx = -1;
    if (!val || !currentMode) { dropdown.classList.remove('open'); return; }

    var glossario = getGlossario();
    var matches = Object.keys(glossario).filter(function(k) { return k.toLowerCase().includes(val); }).slice(0, 8);
    if (!matches.length) { dropdown.classList.remove('open'); return; }

    matches.forEach(function(term) {
      var item = document.createElement('div');
      item.className = 'autocomplete-item';
      var idx = term.toLowerCase().indexOf(val);
      item.innerHTML = term.slice(0, idx) + '<mark>' + term.slice(idx, idx + val.length) + '</mark>' + term.slice(idx + val.length);
      item.addEventListener('mousedown', function(e) {
        e.preventDefault();
        inputEl.value = term;
        dropdown.classList.remove('open');
        if (isResultPage) executarBusca(term, currentMode);
        else buscar();
      });
      dropdown.appendChild(item);
    });
    dropdown.classList.add('open');
  });

  inputEl.addEventListener('keydown', function(e) {
    var items = dropdown.querySelectorAll('.autocomplete-item');
    if (e.key === 'Enter') {
      if (acIdx >= 0 && items[acIdx]) { inputEl.value = items[acIdx].textContent; dropdown.classList.remove('open'); }
      if (isResultPage) executarBusca(inputEl.value.trim(), currentMode);
      else buscar();
      return;
    }
    if (!items.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); acIdx = Math.min(acIdx+1, items.length-1); items.forEach(function(el,i){ el.classList.toggle('selected', i===acIdx); }); if(items[acIdx]) inputEl.value = items[acIdx].textContent; }
    else if (e.key === 'ArrowUp') { e.preventDefault(); acIdx = Math.max(acIdx-1, -1); items.forEach(function(el,i){ el.classList.toggle('selected', i===acIdx); }); if(acIdx>=0&&items[acIdx]) inputEl.value = items[acIdx].textContent; }
    else if (e.key === 'Escape') dropdown.classList.remove('open');
  });

  document.addEventListener('click', function(e) { if (!e.target.closest('.autocomplete-wrap')) dropdown.classList.remove('open'); });
}

// ══════════════════════════════════════
//   NEURAL NETWoRK
// ══════════════════════════════════════
var neuralCanvas, neuralCtx, neuralRAF, neuralNodes = [], signals = [], signalInterval;

function startNeuralNet() {
  stopNeuralNet();
  neuralCanvas = document.getElementById('neural-canvas');
  if (!neuralCanvas) return;
  neuralCtx = neuralCanvas.getContext('2d');
  resizeNeural();
  window.addEventListener('resize', resizeNeural);
  neuralCanvas.classList.add('visible');
  neuralRAF = requestAnimationFrame(drawNeural);
  signalInterval = setInterval(fireSignal, 700);
}

function resizeNeural() {
  if (!neuralCanvas) return;
  neuralCanvas.width  = window.innerWidth;
  neuralCanvas.height = window.innerHeight;
  buildNodes();
}

function buildNodes() {
  neuralNodes = [];
  signals = [];
  var W = neuralCanvas.width, H = neuralCanvas.height;
  var count = Math.min(60, Math.floor(W * H / 18000));
  for (var i = 0; i < count; i++) {
    neuralNodes.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 3 + 2.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.018 + 0.006,
      activeFade: 0,
    });
  }
}

function fireSignal() {
  if (!neuralCanvas || neuralNodes.length < 2) return;
  var maxDist = Math.min(neuralCanvas.width, neuralCanvas.height) * 0.26;
  var srcIdx = Math.floor(Math.random() * neuralNodes.length);
  var src = neuralNodes[srcIdx];
  var nearby = [];
  neuralNodes.forEach(function(n, i) {
    if (i === srcIdx) return;
    var dx = n.x - src.x, dy = n.y - src.y;
    if (Math.sqrt(dx*dx + dy*dy) < maxDist) nearby.push(i);
  });
  if (!nearby.length) return;
  var tgtIdx = nearby[Math.floor(Math.random() * nearby.length)];
  var tgt = neuralNodes[tgtIdx];
  src.activeFade = 1;
  signals.push({ x: src.x, y: src.y, tx: tgt.x, ty: tgt.y, tgtIdx: tgtIdx, t: 0, speed: Math.random() * 0.016 + 0.008, done: false });
}

function drawNeural() {
  if (!neuralCtx || !neuralCanvas) return;
  var W = neuralCanvas.width, H = neuralCanvas.height;
  var maxDist = Math.min(W, H) * 0.26;
  neuralCtx.clearRect(0, 0, W, H);

  neuralNodes.forEach(function(n) {
    n.x += n.vx; n.y += n.vy;
    if (n.x < 0) n.x = W; if (n.x > W) n.x = 0;
    if (n.y < 0) n.y = H; if (n.y > H) n.y = 0;
    n.pulse += n.pulseSpeed;
    if (n.activeFade > 0) n.activeFade -= 0.01;
  });

  // Connections
  for (var i = 0; i < neuralNodes.length; i++) {
    for (var j = i + 1; j < neuralNodes.length; j++) {
      var a = neuralNodes[i], b = neuralNodes[j];
      var dx = b.x - a.x, dy = b.y - a.y;
      var dist = Math.sqrt(dx*dx + dy*dy);
      if (dist > maxDist) continue;
      var alpha = (1 - dist / maxDist) * 0.12;
      neuralCtx.beginPath();
      neuralCtx.moveTo(a.x, a.y);
      neuralCtx.lineTo(b.x, b.y);
      neuralCtx.strokeStyle = 'rgba(26,58,107,' + alpha + ')';
      neuralCtx.lineWidth = 0.7;
      neuralCtx.stroke();
    }
  }

  // Signals
  signals.forEach(function(s) {
    if (s.done) return;
    s.t += s.speed;
    if (s.t >= 1) {
      s.done = true;
      if (neuralNodes[s.tgtIdx]) neuralNodes[s.tgtIdx].activeFade = 1;
      return;
    }
    var x = s.x + (s.tx - s.x) * s.t;
    var y = s.y + (s.ty - s.y) * s.t;
    var grad = neuralCtx.createRadialGradient(x, y, 0, x, y, 9);
    grad.addColorStop(0, 'rgba(100,180,255,' + (0.9 * (1 - s.t * 0.4)) + ')');
    grad.addColorStop(1, 'rgba(74,144,217,0)');
    neuralCtx.beginPath();
    neuralCtx.arc(x, y, 9, 0, Math.PI * 2);
    neuralCtx.fillStyle = grad;
    neuralCtx.fill();
    neuralCtx.beginPath();
    neuralCtx.arc(x, y, 2.5, 0, Math.PI * 2);
    neuralCtx.fillStyle = 'rgba(180,220,255,0.95)';
    neuralCtx.fill();
  });
  signals = signals.filter(function(s) { return !s.done; });

  // Nodes
  neuralNodes.forEach(function(n) {
    var pr = n.r + Math.sin(n.pulse) * 1.3;
    var isActive = n.activeFade > 0;
    var base = isActive ? 0.5 + n.activeFade * 0.5 : 0.32;

    if (isActive) {
      var glow = neuralCtx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 6);
      glow.addColorStop(0, 'rgba(74,144,217,' + (n.activeFade * 0.45) + ')');
      glow.addColorStop(1, 'rgba(74,144,217,0)');
      neuralCtx.beginPath();
      neuralCtx.arc(n.x, n.y, pr * 6, 0, Math.PI * 2);
      neuralCtx.fillStyle = glow;
      neuralCtx.fill();
    }

    var ng = neuralCtx.createRadialGradient(n.x - pr*0.3, n.y - pr*0.3, 0, n.x, n.y, pr);
    ng.addColorStop(0, 'rgba(160,205,255,' + base + ')');
    ng.addColorStop(1, 'rgba(26,58,107,' + (base * 0.55) + ')');
    neuralCtx.beginPath();
    neuralCtx.arc(n.x, n.y, pr, 0, Math.PI * 2);
    neuralCtx.fillStyle = ng;
    neuralCtx.fill();
    neuralCtx.beginPath();
    neuralCtx.arc(n.x, n.y, pr, 0, Math.PI * 2);
    neuralCtx.strokeStyle = 'rgba(74,144,217,' + (base * 1.3) + ')';
    neuralCtx.lineWidth = 1;
    neuralCtx.stroke();
  });

  neuralRAF = requestAnimationFrame(drawNeural);
}

function stopNeuralNet() {
  if (neuralRAF) { cancelAnimationFrame(neuralRAF); neuralRAF = null; }
  if (neuralCanvas) neuralCanvas.classList.remove('visible');
  if (signalInterval) { clearInterval(signalInterval); signalInterval = null; }
  neuralCtx = null; neuralNodes = []; signals = [];
  window.removeEventListener('resize', resizeNeural);
}

// ══════════════════════════════════════
//   CoDE PARTICLES
// ══════════════════════════════════════
var codeSnippets = ['01','10','00','11','101','{code}','</>','fn()','null','&&','||','=>','[]','{}','()','API','GET','PoST','def ','const','return','import','async','await','SELECT','WHERE','JoIN','HTTP','404','200','forEach','map()','filter()','Promise','git','npm','sudo','curl','docker','.then()','try{}','catch'];
var particleInterval = null;

function startCodeParticles() {
  stopCodeParticles();
  var container = document.getElementById('code-particles');
  if (!container) return;
  container.classList.add('visible');
  particleInterval = setInterval(spawnParticle, 380);
  for (var i = 0; i < 8; i++) (function(i){ setTimeout(spawnParticle, i * 90); })(i);
}

function spawnParticle() {
  var container = document.getElementById('code-particles');
  if (!container || !container.classList.contains('visible')) return;
  var el = document.createElement('span');
  el.className = 'code-particle';
  el.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  var x = Math.random() * 90 + 2;
  var y = Math.random() * 85 + 5;
  var dur = (Math.random() * 4 + 3).toFixed(1);
  var dx = (Math.random() * 70 - 35).toFixed(0);
  el.style.cssText = 'left:' + x + '%;top:' + y + '%;--dx:' + dx + 'px;animation-duration:' + dur + 's;';
  container.appendChild(el);
  setTimeout(function() { el.remove(); }, parseFloat(dur) * 1000 + 300);
}

function stopCodeParticles() {
  if (particleInterval) { clearInterval(particleInterval); particleInterval = null; }
  var c = document.getElementById('code-particles');
  if (c) { c.classList.remove('visible'); c.innerHTML = ''; }
}

// ══════════════════════════════════════
//   MoDE SWITCHING
// ══════════════════════════════════════
var lastModeSwitch = 0;
var CooLDoWN_MS = 10000;
var damaVideo = null;

function startDamaVideo() {
  if (!damaVideo) damaVideo = document.getElementById('dama-video');
  if (!damaVideo) return;

  damaVideo.loop = true;
  damaVideo.muted = true;
  damaVideo.playbackRate = 1;

  var playPromise = damaVideo.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(function() {
      // Ignore autoplay/play promise errors while the browser negotiates media state.
    });
  }
}

function stopDamaVideo() {
  if (!damaVideo) damaVideo = document.getElementById('dama-video');
  if (!damaVideo) return;

  damaVideo.pause();
  damaVideo.currentTime = 0;
}

function setMode(mode, skipCooldown) {
  var now = Date.now();

  // Already in this mode?
  if (currentMode === mode) {
    showModeToast('You are already in ' + (mode === 'law' ? 'Law' : 'Tech') + ' mode.', mode);
    return;
  }

  // Cooldown
  if (!skipCooldown && lastModeSwitch > 0 && (now - lastModeSwitch) < CooLDoWN_MS) {
    showCooldownToast(Math.ceil((CooLDoWN_MS - (now - lastModeSwitch)) / 1000));
    return;
  }
  lastModeSwitch = now;

  // Fade overlay
  var overlay = document.getElementById('fade-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'fade-overlay';
    overlay.className = 'fade-overlay';
    document.body.appendChild(overlay);
  }
  overlay.classList.add('active');

  setTimeout(function() {
    applyModeVisuals(mode);
    localStorage.setItem('glossary-mode', mode);
    setTimeout(function() { overlay.classList.remove('active'); }, 60);
  }, 300);
}

function applyModeVisuals(mode) {
  currentMode = mode;
  var body = document.body;
  var dama = document.getElementById('dama-wrap');
  var lawBadge = document.getElementById('law-badge');
  var cornerInfo = document.getElementById('corner-info');
  var techBadge = document.getElementById('tech-badge');
  var cornerInfoTech = document.getElementById('corner-info-tech');
  var btnLaw = document.getElementById('btn-law');
  var btnTech = document.getElementById('btn-tech');
  var searchArea = document.getElementById('search-area');

  // Show search area on index
  if (searchArea) searchArea.style.display = '';

  if (mode === 'law') {
    body.classList.add('law-mode');
    body.classList.remove('tech-mode');

    if (dama) { dama.classList.add('visible'); setTimeout(function() { dama.classList.add('fadein'); }, 50); }
    if (lawBadge)   { lawBadge.style.display = 'block';   setTimeout(function() { lawBadge.style.opacity = '1'; }, 50); }
    if (cornerInfo) { cornerInfo.style.display = 'block'; setTimeout(function() { cornerInfo.style.opacity = '1'; }, 50); }
    if (techBadge)      { techBadge.style.opacity = '0';      setTimeout(function() { techBadge.style.display = 'none'; }, 400); }
    if (cornerInfoTech) { cornerInfoTech.style.opacity = '0'; setTimeout(function() { cornerInfoTech.style.display = 'none'; }, 400); }

    stopNeuralNet();
    stopCodeParticles();
    startDamaVideo();
    if (btnLaw)  btnLaw.classList.add('active');
    if (btnTech) btnTech.classList.remove('active');

  } else {
    body.classList.add('tech-mode');
    body.classList.remove('law-mode');

    if (dama) { dama.classList.remove('fadein'); setTimeout(function() { dama.classList.remove('visible'); }, 400); }
    if (lawBadge)   { lawBadge.style.opacity = '0';   setTimeout(function() { lawBadge.style.display = 'none'; }, 400); }
    if (cornerInfo) { cornerInfo.style.opacity = '0'; setTimeout(function() { cornerInfo.style.display = 'none'; }, 400); }
    if (techBadge)      { techBadge.style.display = 'block';      setTimeout(function() { techBadge.style.opacity = '1'; }, 50); }
    if (cornerInfoTech) { cornerInfoTech.style.display = 'block'; setTimeout(function() { cornerInfoTech.style.opacity = '1'; }, 50); }

    startNeuralNet();
    startCodeParticles();
    stopDamaVideo();
    if (btnTech) btnTech.classList.add('active');
    if (btnLaw)  btnLaw.classList.remove('active');
  }
}

// ══════════════════════════════════════
//   INIT
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  var inputEl  = document.getElementById('campo-pesquisa');
  var dropdown = document.getElementById('autocomplete-dropdown');
  var botao    = document.getElementById('botao-pesquisa');

  // ── RESULT PAGE ──
  if (isResultPage) {
    var params   = new URLSearchParams(window.location.search);
    var termoURL = params.get('termo');
    var modeURL  = params.get('mode');

    if (!termoURL || !modeURL) { window.location.href = 'index.html'; return; }

    currentMode = modeURL;
    document.body.classList.add(modeURL + '-mode');
    var btnLaw  = document.getElementById('btn-law');
    var btnTech = document.getElementById('btn-tech');
    if (modeURL === 'law'  && btnLaw)  btnLaw.classList.add('active');
    if (modeURL === 'tech' && btnTech) btnTech.classList.add('active');
    if (inputEl) inputEl.value = termoURL;
    executarBusca(termoURL, modeURL);

    if (botao) {
      botao.addEventListener('click', function() {
        var t = inputEl ? inputEl.value.trim() : '';
        if (t) executarBusca(t, currentMode);
      });
    }
    setupAutocomplete(inputEl, dropdown);
    return;
  }

  // ── INDEX PAGE ──
  // Check URL param ?mode= (from goToMode redirect)
  var urlParams = new URLSearchParams(window.location.search);
  var modeParam = urlParams.get('mode');
  if (modeParam === 'law' || modeParam === 'tech') {
    lastModeSwitch = 0;
    setMode(modeParam, true);
    // Clean URL
    history.replaceState({}, '', 'index.html');
  }
  // Do NoT restore from localStorage on index — always start neutral unless URL param

  if (botao) {
    botao.addEventListener('click', buscar);
  }
  if (inputEl) {
    inputEl.addEventListener('keydown', function(e) { if (e.key === 'Enter') buscar(); });
  }
  setupAutocomplete(inputEl, dropdown);
});

document.addEventListener('DoMContentLoaded', function() {
  damaVideo = document.getElementById('dama-video');
  if (!damaVideo) return;

  damaVideo.addEventListener('loadedmetadata', function() {
    if (currentMode === 'law') startDamaVideo();
  });

  damaVideo.addEventListener('canplay', function() {
    if (currentMode === 'law' && damaVideo.paused) startDamaVideo();
  });

  damaVideo.addEventListener('stalled', function() {
    if (currentMode === 'law' && damaVideo.paused) startDamaVideo();
  });
});

function toggleHelp() {
  var overlay = document.getElementById('help-overlay');
  overlay.classList.toggle('open');
}

function closeHelp(e) {
  if (!e || e.target === document.getElementById('help-overlay') || e.target.classList.contains('help-close')) {
    document.getElementById('help-overlay').classList.remove('open');
  }
}
