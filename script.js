// ══════════════════════════════════════════════════════════
//   GLOSSÁRIO TECH — pesquisa em inglês, descrição em PT-BR
// ══════════════════════════════════════════════════════════
const techGlossario = {

  // ── Conceitos gerais ──
  "html": "Linguagem de marcação usada para estruturar páginas web. Define a estrutura e o conteúdo da página com tags como <h1>, <p>, <div>.",
  "css": "Linguagem de estilos que controla aparência, layout e cores das páginas HTML. Usa seletores e propriedades para estilizar elementos.",
  "javascript": "Linguagem de programação interpretada que roda no navegador e no servidor (Node.js). Permite interatividade, manipulação do DOM e chamadas de API.",
  "dom": "Document Object Model — representação em árvore de um documento HTML. Permite ao JavaScript acessar e modificar elementos da página.",
  "api": "Interface de Programação de Aplicações — contrato que define como softwares se comunicam. Exemplo: REST API, GraphQL.",
  "responsive design": "Design que adapta o layout a diferentes tamanhos de tela usando media queries e unidades flexíveis (%, vw, rem).",
  "algorithm": "Sequência finita de passos para resolver um problema. Avaliada por complexidade de tempo O(n) e espaço.",
  "data structure": "Formato para organizar e acessar dados eficientemente. Exemplos: array, lista ligada, pilha, fila, árvore, hash table.",
  "object-oriented programming": "Paradigma que organiza código em classes e objetos com encapsulamento, herança e polimorfismo.",
  "functional programming": "Paradigma que trata funções como valores, evita estado mutável e usa composição, map, filter e reduce.",
  "database": "Sistema para armazenar, consultar e gerenciar dados persistentes. Pode ser relacional (SQL) ou não relacional (NoSQL).",
  "sql": "Linguagem de consulta estruturada para bancos relacionais. Comandos: SELECT, INSERT, UPDATE, DELETE, JOIN.",
  "nosql": "Bancos não relacionais com esquemas flexíveis. Tipos: documento (MongoDB), chave-valor (Redis), coluna (Cassandra), grafo.",
  "mongodb": "Banco NoSQL orientado a documentos que armazena dados em formato BSON (similar a JSON). Usa collections e documents.",
  "postgresql": "Banco relacional open-source com suporte a JSON, arrays, herança e extensões. Muito usado em produção.",
  "mysql": "Banco relacional amplamente usado em aplicações web. Base de muitos CMSs como WordPress.",
  "machine learning": "Subcampo de IA que treina modelos para aprender padrões em dados sem programação explícita de cada regra.",
  "deep learning": "ML com redes neurais de múltiplas camadas. Usado em visão computacional, NLP e geração de conteúdo.",
  "neural network": "Modelo computacional com neurônios artificiais em camadas: input, hidden e output. Aprende ajustando pesos.",
  "data science": "Campo interdisciplinar que combina estatística, programação e domínio de negócio para extrair insights de dados.",
  "big data": "Datasets muito grandes ou complexos que exigem ferramentas distribuídas (Hadoop, Spark) para processar.",
  "cloud computing": "Entrega sob demanda de recursos (compute, storage, rede) pela internet. Principais provedores: AWS, GCP, Azure.",
  "aws": "Amazon Web Services — maior plataforma de cloud com EC2, S3, Lambda, RDS e centenas de outros serviços.",
  "serverless": "Modelo onde você escreve funções que são executadas sob demanda sem gerenciar servidores. Ex: AWS Lambda.",
  "ci/cd": "Integração Contínua e Entrega Contínua — pipeline automatizado de build, testes e deploy a cada commit.",
  "docker": "Plataforma de containers que empacota aplicação + dependências em uma imagem isolada e portátil.",
  "kubernetes": "Orquestrador de containers que automatiza deploy, escalonamento e gerenciamento de aplicações em cluster.",
  "git": "Sistema de controle de versão distribuído. Comandos básicos: init, clone, add, commit, push, pull, branch, merge.",
  "github": "Plataforma web para hospedar repositórios Git com pull requests, issues, actions e colaboração em equipe.",
  "rest": "Estilo arquitetural para APIs usando HTTP: GET (ler), POST (criar), PUT/PATCH (atualizar), DELETE (remover).",
  "graphql": "Linguagem de consulta para APIs onde o cliente especifica exatamente quais campos quer receber.",
  "http": "Protocolo de transferência de hipertexto — base da web. Define métodos, status codes e headers.",
  "https": "HTTP com TLS/SSL — criptografa dados em trânsito para garantir segurança na comunicação web.",
  "json": "JavaScript Object Notation — formato leve de troca de dados baseado em pares chave-valor. Muito usado em APIs.",
  "websocket": "Protocolo de comunicação bidirecional em tempo real sobre uma única conexão TCP persistente.",
  "jwt": "JSON Web Token — token compacto e autocontido para autenticação, com header, payload e signature.",
  "oauth": "Padrão de autorização que permite que aplicações acessem recursos em nome do usuário sem expor senha.",
  "security": "Práticas para proteger sistemas: autenticação, autorização, criptografia, sanitização de inputs.",
  "encryption": "Codificação de dados com chave para que só partes autorizadas possam decifrar. Ex: AES, RSA.",
  "microservices": "Arquitetura que divide aplicação em serviços pequenos, independentes e com responsabilidades únicas.",
  "redis": "Banco chave-valor em memória usado como cache, fila de mensagens e armazenamento de sessões. Muito rápido.",
  "kafka": "Plataforma de streaming distribuído para eventos em grande volume. Usa tópicos, produtores e consumidores.",
  "nginx": "Servidor web e proxy reverso de alto desempenho. Usado para load balancing e servir arquivos estáticos.",
  "linux": "Sistema operacional open-source baseado em Unix. Base de servidores, containers e desenvolvimento back-end.",
  "bash": "Shell Unix/Linux para automação de tarefas via scripts. Suporta variáveis, loops, condicionais e pipes.",
  "vscode": "Visual Studio Code — editor de código da Microsoft com extensões, debug integrado e IntelliSense.",
  "devops": "Cultura que une desenvolvimento e operações para entregas contínuas com qualidade e automação.",
  "agile": "Metodologia iterativa com ciclos curtos (sprints), feedback constante e adaptação a mudanças.",
  "scrum": "Framework ágil com sprints, daily standups, sprint planning, review e retrospectiva.",
  "tdd": "Test-Driven Development — ciclo Red-Green-Refactor: escreve teste, faz passar, melhora o código.",
  "ux": "User Experience — estudo de como usuários interagem com produtos para criar experiências intuitivas.",
  "ui": "User Interface — design visual dos elementos com os quais o usuário interage: botões, formulários, menus.",
  "accessibility": "Design inclusivo que garante usabilidade por pessoas com deficiências. Padrão WCAG.",
  "performance": "Velocidade e eficiência de um sistema. Métricas: latência, throughput, tempo de resposta.",
  "scalability": "Capacidade de lidar com aumento de carga via scale-up (mais recursos) ou scale-out (mais instâncias).",
  "cdn": "Content Delivery Network — distribui conteúdo estático de servidores próximos ao usuário para reduzir latência.",
  "pwa": "Progressive Web App — web app instalável com suporte offline usando service workers e manifest.",
  "repository": "Repositório Git — diretório que rastreia histórico de commits, branches e tags de um projeto.",
  "branch": "Ramificação do histórico Git para desenvolver features isoladas. Padrão: main, develop, feature/nome.",
  "pull request": "Solicitação para integrar mudanças de um branch; permite revisão de código antes do merge.",
  "merge": "Integração de mudanças de um branch em outro. Pode ser via merge commit, rebase ou squash.",
  "debugging": "Processo de identificar e corrigir bugs usando debuggers, logs, breakpoints e análise de stack trace.",
  "refactoring": "Reestruturação do código sem alterar comportamento externo. Melhora legibilidade e manutenibilidade.",
  "open source": "Software com código publicamente disponível. Contribuições via fork, pull request e issues.",
  "sdk": "Software Development Kit — conjunto de ferramentas, bibliotecas e docs para desenvolver em uma plataforma.",
  "ide": "Ambiente de Desenvolvimento Integrado com editor, debugger, terminal e autocomplete integrados.",
  "compiler": "Traduz código-fonte para código de máquina ou bytecode antes da execução. Ex: GCC, Clang.",
  "interpreter": "Executa código-fonte linha a linha sem compilação prévia. Ex: Python, Ruby, JavaScript (V8).",
  "runtime": "Ambiente de execução que fornece serviços como gerenciamento de memória e I/O durante a execução.",
  "framework": "Estrutura com convenções e ferramentas para acelerar desenvolvimento. Ex: Rails, Django, Spring.",
  "library": "Coleção de funções/classes reutilizáveis que você chama no seu código. Ex: NumPy, Lodash.",
  "middleware": "Software intermediário que processa requisições entre cliente e servidor. Ex: autenticação, logging.",
  "mvc": "Model-View-Controller — padrão que separa dados (Model), apresentação (View) e lógica (Controller).",
  "solid": "5 princípios de design OO: Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion.",
  "api gateway": "Ponto de entrada único que roteia requisições para microserviços, aplica autenticação e rate limiting.",
  "monorepo": "Estratégia de manter múltiplos projetos/pacotes em um único repositório Git.",
  "linting": "Análise estática que detecta erros de sintaxe, estilo e boas práticas sem executar o código.",

  // ── Linguagens e comandos ──
  "python": "Linguagem de alto nível interpretada, conhecida pela legibilidade. Muito usada em IA, automação e web.",
  "print": "Função que exibe saída no terminal. Python: print('texto') | C: printf('texto') | Java: System.out.println('texto')",
  "printf": "Função de saída formatada em C/C++. Exemplo: printf('%d anos', 25); — imprime '25 anos'.",
  "scanf": "Função de entrada em C. Lê dados do terminal. Exemplo: scanf('%d', &numero); — lê um inteiro.",
  "input": "Leitura de entrada do usuário. Python: x = input('Digite: ') | JavaScript: sem equivalente nativo (usa readline).",
  "cout": "Saída padrão em C++. Exemplo: cout << 'Olá' << endl; — equivalente ao printf em C.",
  "cin": "Entrada padrão em C++. Exemplo: cin >> numero; — lê valor do terminal.",
  "system.out.println": "Saída padrão em Java. Imprime texto com quebra de linha. Exemplo: System.out.println('Olá');",
  "console.log": "Saída de debug no JavaScript. Imprime no console do navegador ou terminal Node.js.",
  "#include": "Diretiva de pré-processador em C/C++ que inclui um arquivo de cabeçalho. Exemplo: #include <stdio.h>",
  "import": "Instrução para importar módulos/pacotes. Python: import numpy | JavaScript: import React from 'react'",
  "require": "Importação de módulos em Node.js/CommonJS. Exemplo: const fs = require('fs');",
  "var": "Declaração de variável em JavaScript com escopo de função (evitar; use let ou const).",
  "let": "Declaração de variável em JavaScript com escopo de bloco. Pode ser reatribuída.",
  "const": "Declaração de constante em JavaScript com escopo de bloco. Não pode ser reatribuída.",
  "def": "Palavra-chave para declarar funções em Python. Exemplo: def soma(a, b): return a + b",
  "function": "Declaração de função em JavaScript/PHP. Exemplo: function somar(a, b) { return a + b; }",
  "return": "Instrução que encerra uma função e retorna um valor ao chamador.",
  "if": "Estrutura condicional básica disponível em todas as linguagens. Executa bloco se condição for verdadeira.",
  "for": "Loop de repetição com contador. C/Java: for(int i=0;i<10;i++) | Python: for i in range(10):",
  "while": "Loop que repete enquanto condição for verdadeira. Cuidado com loops infinitos.",
  "foreach": "Iteração sobre coleções. PHP: foreach($arr as $v) | C#: foreach(var v in lista)",
  "map": "Aplica função a cada elemento de uma lista. Python: map(fn, lista) | JS: array.map(fn)",
  "filter": "Filtra elementos de uma coleção baseado em condição. JS: array.filter(fn) | Python: filter(fn, lista)",
  "reduce": "Reduz coleção a um único valor acumulando. JS: array.reduce((acc, v) => acc + v, 0)",
  "class": "Define uma classe (modelo para objetos) em linguagens OO. class Animal { constructor() {} }",
  "object": "Instância de uma classe com atributos e métodos. Em JavaScript, objetos literais: { chave: valor }",
  "array": "Estrutura de dados sequencial. Python: lista=[1,2,3] | JS: let arr=[1,2,3] | C: int arr[3]={1,2,3};",
  "string": "Tipo de dado para texto. Imutável em Python/Java. Operações: length, slice, split, join, replace.",
  "int": "Tipo de dado para números inteiros. Tamanho varia por linguagem (32-bit, 64-bit).",
  "float": "Tipo de dado para números de ponto flutuante (decimais). Cuidado com imprecisão de ponto flutuante.",
  "bool": "Tipo booleano com valores true/false. Usado em condicionais e comparações.",
  "null": "Valor especial que representa ausência de valor. Em JS: null e undefined têm distinção.",
  "undefined": "Em JavaScript, variável declarada mas não inicializada. typeof undefined === 'undefined'.",
  "none": "Equivalente ao null em Python. Representa ausência de valor.",
  "exception": "Erro em tempo de execução que interrompe o fluxo normal. Tratado com try/catch ou try/except.",
  "try catch": "Bloco para capturar e tratar exceções. try { risco } catch(e) { trata erro } finally { sempre }",
  "try except": "Equivalente Python ao try/catch. try: codigo() except ValueError as e: print(e)",
  "stack overflow": "Erro quando a pilha de chamadas excede o limite. Causa comum: recursão infinita sem caso base.",
  "null pointer": "Erro de tentar acessar método/propriedade em referência nula. NullPointerException em Java.",
  "segmentation fault": "Erro em C/C++ de acesso a memória inválida. Causa: ponteiro nulo, buffer overflow.",
  "index out of bounds": "Acesso a índice inexistente em array. arr[10] quando arr tem 5 elementos.",
  "syntax error": "Erro de código malformado que impede compilação/interpretação. Geralmente falta ; ou }.",
  "type error": "Erro de tipo incorreto em operação. JS: undefined is not a function | Python: unsupported operand.",
  "recursion": "Função que chama a si mesma. Precisa de caso base para evitar stack overflow. Ex: fatorial(n).",
  "closure": "Função que captura variáveis do escopo onde foi criada. Muito usado em JavaScript.",
  "callback": "Função passada como argumento para ser chamada depois. Base do estilo assíncrono em JavaScript.",
  "promise": "Objeto JS que representa resultado futuro de operação assíncrona. Estados: pending, fulfilled, rejected.",
  "async await": "Sintaxe JS para trabalhar com promises de forma síncrona. async function fn() { await promise }",
  "pointer": "Variável que armazena endereço de memória em C/C++. int *p = &x; — acessa valor com *p.",
  "memory leak": "Memória alocada que nunca é liberada. Causa degradação de performance ao longo do tempo.",
  "garbage collection": "Gerenciamento automático de memória que libera objetos sem referência. Java, Python, JS.",
  "interface": "Contrato que define métodos que uma classe deve implementar. TypeScript/Java/C#.",
  "inheritance": "Mecanismo OO onde classe filha herda atributos e métodos da classe pai.",
  "polymorphism": "Capacidade de objetos de diferentes classes responderem ao mesmo método de formas distintas.",
  "encapsulation": "Ocultar detalhes internos de implementação expondo apenas interface pública.",
  "abstraction": "Simplificar complexidade expondo apenas o essencial. Classes abstratas e interfaces.",
  "design pattern": "Solução reutilizável para problemas recorrentes de design. Ex: Singleton, Factory, Observer.",
  "singleton": "Padrão que garante uma única instância de classe durante toda a execução.",
  "factory": "Padrão que delega a criação de objetos a métodos especializados sem expor lógica de instanciação.",
  "observer": "Padrão onde objetos (observadores) são notificados automaticamente de mudanças em outro (sujeito).",
  "decorator": "Padrão que adiciona comportamento a objetos dinamicamente sem alterar sua classe.",
  "dependency injection": "Padrão onde dependências são fornecidas externamente em vez de criadas internamente.",
  "big o notation": "Notação para descrever complexidade de algoritmos. O(1) constante, O(n) linear, O(n²) quadrático.",
  "binary search": "Algoritmo de busca eficiente O(log n) em arrays ordenados. Divide o espaço de busca pela metade.",
  "sorting": "Algoritmos de ordenação: Bubble Sort O(n²), Merge Sort O(n log n), Quick Sort O(n log n) médio.",
  "hash table": "Estrutura de dados com acesso O(1) médio via função hash. Implementada como objetos em JS.",
  "linked list": "Estrutura com nós que apontam para o próximo. Inserção O(1), busca O(n).",
  "stack": "Estrutura LIFO (Last In First Out). Operações: push e pop. Usada em chamadas de função.",
  "queue": "Estrutura FIFO (First In First Out). Operações: enqueue e dequeue. Usada em filas de tarefas.",
  "tree": "Estrutura hierárquica com nó raiz e nós filhos. Árvore binária de busca: O(log n) para busca.",
  "graph": "Estrutura com nós (vértices) e arestas. Algoritmos: BFS, DFS, Dijkstra.",

  // ── Linguagens específicas ──
  "c": "Linguagem de sistemas de baixo nível com gerenciamento manual de memória. Base de sistemas operacionais.",
  "c++": "C com orientação a objetos, templates e STL. Usado em jogos, sistemas embarcados e alta performance.",
  "c#": "Linguagem Microsoft para .NET com tipagem estática, LINQ e async/await integrado.",
  "java": "Linguagem OO com JVM. 'Write once, run anywhere'. Muito usada em sistemas corporativos e Android.",
  "kotlin": "Linguagem moderna para JVM e Android. Interoperável com Java. Null safety nativo.",
  "swift": "Linguagem Apple para iOS/macOS com gerenciamento automático de memória (ARC) e opcionais.",
  "rust": "Linguagem de sistemas com ownership system que garante segurança de memória sem GC.",
  "go": "Linguagem Google com goroutines para concorrência, compilação rápida e binários únicos.",
  "php": "Linguagem server-side para web. Frameworks: Laravel, Symfony. Embedded em HTML.",
  "ruby": "Linguagem dinâmica e expressiva. Framework Rails com convenção sobre configuração.",
  "typescript": "Superset do JavaScript com tipagem estática. Compila para JS. Melhora manutenibilidade.",
  "dart": "Linguagem Google para Flutter. Compilada para ARM, x86 e JavaScript.",
  "lua": "Linguagem de script leve usada em jogos (Roblox, gamedev) e sistemas embarcados.",
  "r": "Linguagem para estatística e análise de dados com amplo ecossistema de pacotes (CRAN).",
  "scala": "Linguagem que combina OO e funcional na JVM. Usado com Spark para big data.",
  "haskell": "Linguagem funcional pura com sistema de tipos avançado e avaliação lazy.",
  "perl": "Linguagem de script poderosa para manipulação de texto e automação de sistemas.",
  "ruby on rails": "Framework Ruby que segue MVC e convention over configuration. Produtividade alta.",
  "django": "Framework Python full-stack com ORM, admin automático e autenticação integrada.",
  "flask": "Microframework Python minimalista para APIs e web apps sem opinião sobre estrutura.",
  "spring": "Framework Java corporativo com IoC/DI, Spring Boot para microserviços.",
  "laravel": "Framework PHP com Eloquent ORM, Blade templating e Artisan CLI.",
  "vue": "Framework JavaScript progressivo para UIs reativas com componentes e data binding.",
  "react": "Biblioteca JavaScript da Meta para construir UIs baseadas em componentes e Virtual DOM.",
  "angular": "Framework TypeScript do Google com injeção de dependência, RxJS e CLI robusto.",
  "svelte": "Framework que compila componentes em JS vanilla sem runtime virtual DOM.",
  "node.js": "Ambiente runtime JavaScript no servidor baseado no motor V8 do Chrome.",
  "express": "Framework minimalista Node.js para criação de APIs e servidores HTTP.",
  "nestjs": "Framework Node.js progressivo com TypeScript, inspirado no Angular, para APIs escaláveis.",
  "next.js": "Framework React com SSR, SSG e geração de rotas automática. Produção-ready.",
  "npm": "Node Package Manager — instala, publica e gerencia dependências JavaScript.",
  "yarn": "Gerenciador de pacotes alternativo ao npm com workspaces para monorepos.",
  "webpack": "Bundler que agrupa módulos JS e assets em arquivos otimizados para produção.",
  "vite": "Build tool ultra-rápida que usa ESM nativamente no dev e Rollup para produção.",
  "git commit": "Salva snapshot das mudanças no repositório. git commit -m 'mensagem descritiva'",
  "git branch": "Cria ou lista branches. git branch nome cria; git checkout -b nome cria e muda.",
  "git merge": "Integra mudanças de um branch em outro. git merge feature/nome na branch destino.",
  "git rebase": "Reaplica commits de um branch sobre outro reescrevendo o histórico. Use com cuidado.",
  "git clone": "Clona repositório remoto localmente. git clone https://github.com/user/repo.git",
  "git stash": "Salva mudanças não commitadas temporariamente. git stash save 'descrição'",
  "dockerfile": "Arquivo de instruções para construir imagem Docker. FROM, RUN, COPY, CMD, EXPOSE.",
  "docker compose": "Ferramenta para definir e rodar múltiplos containers com arquivo docker-compose.yml.",
  "kubernetes pod": "Menor unidade deployável no Kubernetes. Contém um ou mais containers.",
  "kubernetes deployment": "Objeto K8s que gerencia réplicas de pods e rolling updates.",
  "ci pipeline": "Sequência automatizada: checkout → build → test → lint → notify. Executada a cada push.",
  "unit test": "Testa uma unidade isolada (função/método) com dependências mockadas.",
  "integration test": "Testa interação entre componentes reais (banco, API, serviço externo).",
  "e2e test": "Teste ponta a ponta que simula interação real do usuário no navegador (Cypress, Playwright).",
  "mock": "Objeto simulado que substitui dependência real em testes. Permite controlar comportamento.",
  "regex": "Expressão regular para buscar e manipular padrões em strings. /^[a-z]+$/i",
  "ssh": "Protocolo criptografado para acesso remoto a servidores. ssh usuario@servidor.",
  "api rest": "API que segue princípios REST: stateless, recursos identificáveis, respostas JSON/XML.",
  "http status": "Códigos de resposta HTTP: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error.",
  "cors": "Cross-Origin Resource Sharing — mecanismo que permite/bloqueia requisições de origens diferentes.",
  "sql injection": "Ataque que insere SQL malicioso em inputs. Prevenção: queries parametrizadas.",
  "xss": "Cross-Site Scripting — injeta scripts maliciosos em páginas. Prevenção: sanitizar outputs.",
  "csrf": "Cross-Site Request Forgery — força usuário a executar ação não intencional. Prevenção: tokens CSRF.",
  "hashing": "Função unidirecional que gera digest fixo. bcrypt/argon2 para senhas. SHA-256 para integridade.",
  "ssl tls": "Protocolos de criptografia para HTTPS. TLS 1.3 é o mais seguro atualmente.",
  "load balancer": "Distribui tráfego entre múltiplos servidores. Algoritmos: round-robin, least connections.",
  "caching": "Armazenar dados frequentes para acesso rápido. Redis, Memcached, CDN cache, browser cache.",
  "message queue": "Fila assíncrona para comunicação entre serviços. RabbitMQ, SQS, Kafka.",
  "grpc": "Framework RPC de alta performance com Protobuf. Ideal para comunicação entre microserviços.",
  "graphql subscription": "Recurso GraphQL para dados em tempo real via WebSocket.",
  "orm": "Object-Relational Mapping — mapeia classes para tabelas do banco. Ex: Prisma, TypeORM, SQLAlchemy.",
  "migration": "Arquivo que altera esquema do banco de forma versionada e reversível.",
  "seed": "Script que popula banco com dados iniciais para desenvolvimento ou testes.",
  "environment variable": "Variável de configuração externa ao código. Armazenada em .env. Nunca commitada.",
  "dotenv": "Biblioteca que carrega variáveis do arquivo .env para process.env em Node.js.",
  "package.json": "Arquivo manifest do projeto Node.js com nome, versão, scripts e dependências.",
  "tsconfig": "Arquivo de configuração do TypeScript. Define targets, módulos e regras de compilação.",
  "eslint": "Linter JavaScript/TypeScript que detecta erros e aplica regras de estilo personalizáveis.",
  "prettier": "Formatador de código automático que aplica estilo consistente em JS, TS, CSS, JSON.",
  "webpack config": "Arquivo de configuração do Webpack com entry, output, loaders e plugins.",
  "babel": "Transpiler que converte JavaScript moderno (ES2022+) em versões compatíveis com browsers antigos.",
  "polyfill": "Código que implementa funcionalidade moderna em ambientes que não a suportam nativamente.",
  "virtual dom": "Representação em memória do DOM real. React usa para calcular diferenças (diffing) eficientemente.",
  "state management": "Gerenciamento do estado da aplicação. Redux, Zustand, Pinia, Context API.",
  "redux": "Biblioteca de gerenciamento de estado previsível com store, actions e reducers.",
  "hooks": "Funções React que adicionam estado e efeitos a componentes funcionais. useState, useEffect.",
  "context api": "Mecanismo React para compartilhar dados entre componentes sem prop drilling.",
  "lazy loading": "Carregamento sob demanda de recursos (imagens, componentes, módulos) para melhorar performance.",
  "code splitting": "Divisão do bundle JS em chunks menores carregados apenas quando necessários.",
  "tree shaking": "Remoção de código não usado (dead code) durante o processo de bundling.",
  "service worker": "Script background que intercepta requisições e possibilita cache offline e push notifications.",
  "web worker": "Thread JavaScript paralela para processamento pesado sem bloquear a UI.",
  "local storage": "API do navegador para persistir dados no cliente (string). Limite ~5MB por origem.",
  "session storage": "Similar ao localStorage mas dados são limpos ao fechar a aba.",
  "indexeddb": "Banco de dados client-side para armazenar grandes volumes de dados estruturados no navegador.",
  "event loop": "Mecanismo JS que processa a fila de callbacks após a call stack esvaziar. Base do async JS.",
  "prototype": "Mecanismo de herança nativo do JavaScript onde objetos herdam de outros objetos.",
  "this": "Referência ao contexto de execução atual em JavaScript. Varia conforme como a função é chamada.",
  "arrow function": "Sintaxe concisa de função em JS: (a, b) => a + b. Não tem próprio 'this'.",
  "spread operator": "Operador ... que expande iterável. [...arr, item] | {...obj, chave: valor}",
  "destructuring": "Extração de valores de arrays/objetos em variáveis. const {a, b} = obj | const [x, y] = arr",
  "template literal": "String com interpolação em JS: `Olá ${nome}, você tem ${idade} anos`",
  "optional chaining": "Operador ?. em JS que evita erro ao acessar propriedade de valor nulo. obj?.prop",
  "nullish coalescing": "Operador ?? retorna lado direito se esquerdo for null/undefined. val ?? 'padrão'",
  "generics": "Tipos paramétricos que permitem escrever código reutilizável para diferentes tipos. <T>",
  "enum": "Tipo que define conjunto nomeado de constantes. enum Cor { Vermelho, Verde, Azul }",
  "tuple": "Array com tipos e quantidade fixa de elementos. TypeScript: [string, number]",
  "interface typescript": "Contrato de tipo em TypeScript que define forma de objetos. interface User { id: number }",
  "type assertion": "Informar ao TypeScript o tipo de um valor: (valor as string).toUpperCase()",
  "namespace": "Agrupamento de código para evitar conflitos de nomes. C++: namespace | Python: módulos.",
  "module": "Arquivo com código encapsulado que exporta/importa funcionalidades específicas.",
  "package manager": "Ferramenta para instalar, atualizar e gerenciar dependências. npm, yarn, pip, cargo, maven.",
  "virtual environment": "Ambiente Python isolado para dependências de projeto. python -m venv env",
  "pip": "Gerenciador de pacotes Python. pip install pacote | pip install -r requirements.txt",
  "cargo": "Gerenciador de pacotes e build tool do Rust. cargo build | cargo test | cargo run",
  "maven": "Build tool e gerenciador de dependências Java baseado em XML (pom.xml).",
  "gradle": "Build tool moderno para Java/Kotlin/Android com DSL Groovy/Kotlin.",
  "makefile": "Arquivo de build Unix que define targets e dependências para automação de compilação.",
  "dockerfile best practices": "Use imagens base pequenas (alpine), multi-stage builds, não rode como root, cache layers.",
  "solid principles": "S: Single Responsibility | O: Open/Closed | L: Liskov | I: Interface Segregation | D: Dependency Inversion",
  "dry principle": "Don't Repeat Yourself — evite duplicação de código extraindo lógica em funções/classes reutilizáveis.",
  "kiss principle": "Keep It Simple, Stupid — prefira soluções simples e diretas a complexidade desnecessária.",
  "yagni": "You Aren't Gonna Need It — não implemente funcionalidade até que seja realmente necessária.",
  "technical debt": "Custo de manutenção futuro causado por soluções rápidas e atalhos no desenvolvimento.",
  "code review": "Revisão de código por pares para detectar bugs, melhorar qualidade e compartilhar conhecimento.",
  "pair programming": "Dois desenvolvedores no mesmo computador: um pilota (escreve), outro navega (revisa).",
  "sprint": "Período fixo (1-4 semanas) no Scrum para completar um conjunto de tarefas planejadas.",
  "backlog": "Lista priorizada de tarefas/funcionalidades pendentes de desenvolvimento.",
  "mvp": "Minimum Viable Product — versão com funcionalidades mínimas para validar hipótese de produto.",
  "chronokairo": "Chronokairo — liga acadêmica de tecnologia focada em projetos interdisciplinares e pesquisa.",
  "latij": "Latij — liga acadêmica de tecnologia dedicada a inovação, competições e desenvolvimento.",
  "nevext": "Nevext — criador e administrador deste glossário.",
};

// ══════════════════════════════════════════════════════════
//   GLOSSÁRIO LAW — pesquisa em inglês, descrição em PT-BR
// ══════════════════════════════════════════════════════════
const lawGlossario = {

  // ── Direito Constitucional ──
  "constitutional law": "Direito Constitucional — estudo da Constituição, estrutura do Estado e direitos fundamentais.",
  "constitutional law I": "Princípios constitucionais, separação de poderes e controle de constitucionalidade.",
  "constitutional law II": "Direitos fundamentais, ações constitucionais e interpretação constitucional.",
  "due process": "Princípio do Devido Processo Legal — garantia de procedimento justo com contraditório e ampla defesa (CF art. 5º, LIV).",
  "habeas corpus": "Ação constitucional que protege liberdade de locomoção contra prisão ilegal ou arbitrária (CF art. 5º, LXVIII).",
  "habeas data": "Ação para acesso ou retificação de informações pessoais em cadastros públicos ou privados (CF art. 5º, LXXII).",
  "mandado de segurança": "Ação para proteger direito líquido e certo contra ato ilegal de autoridade pública (CF art. 5º, LXIX).",
  "mandado de injunção": "Ação que supre omissão normativa que inviabilize exercício de direito constitucional (CF art. 5º, LXXI).",
  "judicial review": "Controle de constitucionalidade — poder do Judiciário de anular leis contrárias à Constituição.",
  "separation of powers": "Tripartição dos poderes em Executivo, Legislativo e Judiciário com sistema de freios e contrapesos.",
  "checks and balances": "Mecanismo de controle mútuo entre os poderes para evitar concentração e abuso de poder.",
  "fundamental rights": "Direitos humanos positivados na Constituição: vida, liberdade, igualdade, segurança e propriedade.",
  "constitutional amendment": "Emenda Constitucional — alteração formal da CF, aprovada por 3/5 em dois turnos em cada casa.",
  "federal republic": "Forma de Estado brasileiro — federalismo com União, Estados, DF e Municípios com autonomia.",
  "sovereignty": "Poder supremo do Estado internamente e independência frente a outros Estados.",
  "citizenship": "Conjunto de direitos e deveres do cidadão. Aquisição por nascimento (jus soli) ou descendência (jus sanguinis).",
  "democracy": "Regime político em que o poder emana do povo, exercido diretamente ou por representantes eleitos.",
  "ação popular": "Ação que qualquer cidadão pode ajuizar para anular ato lesivo ao patrimônio público (CF art. 5º, LXXIII).",
  "cláusula pétrea": "Cláusulas imutáveis da CF: forma federativa, voto direto, separação de poderes e direitos individuais.",

  // ── Direito Administrativo ──
  "administrative law": "Direito Administrativo — normas da organização e atuação da Administração Pública.",
  "administrative law I": "Princípios administrativos, poderes, atos administrativos e regime jurídico.",
  "administrative law II": "Licitações, contratos administrativos e responsabilidade civil do Estado.",
  "public administration": "Conjunto de órgãos e entidades que exercem função administrativa do Estado.",
  "administrative act": "Ato jurídico praticado pela Administração no exercício de função administrativa.",
  "administrative process": "Procedimento formal para produção de atos administrativos com contraditório.",
  "public tender": "Processo seletivo para ingresso em cargo público. Princípios: legalidade, impessoalidade, publicidade.",
  "public bidding": "Licitação — procedimento para contratos públicos. Modalidades: concorrência, pregão, tomada de preços.",
  "administrative contract": "Contrato entre Administração e particular com cláusulas exorbitantes em favor do poder público.",
  "administrative liability": "Responsabilidade objetiva do Estado por danos causados por seus agentes (CF art. 37, §6º).",
  "public service": "Atividade prestada pelo Estado diretamente ou por delegação (concessão, permissão) aos administrados.",
  "concession": "Delegação de serviço público a particular mediante contrato por prazo determinado.",
  "improbidade administrativa": "Ato ilícito do agente público que causa dano ao erário ou enriquecimento ilícito. Lei 8.429/92.",
  "princípio da legalidade": "Administração só pode fazer o que a lei expressamente autoriza (vinculação positiva à lei).",
  "princípio da impessoalidade": "Atos administrativos devem buscar o interesse público, sem privilégios ou perseguições pessoais.",
  "princípio da moralidade": "Administração deve agir com ética, boa-fé e honestidade, além do mero cumprimento da lei.",
  "princípio da publicidade": "Atos administrativos devem ser transparentes e acessíveis ao público, salvo exceções legais.",
  "princípio da eficiência": "Administração deve alcançar melhores resultados com menor custo e no menor tempo. EC 19/98.",

  // ── Direito Civil ──
  "civil law": "Direito Civil — normas que regulam relações privadas entre pessoas físicas e jurídicas.",
  "civil law I": "Parte Geral: pessoas, bens, fatos jurídicos e prescrição/decadência.",
  "civil law II": "Direito das Obrigações: fontes, modalidades, extinção e inadimplemento.",
  "civil law III": "Direito de Família e Sucessões.",
  "legal person": "Pessoa Jurídica — ente fictício com personalidade jurídica: associações, fundações, sociedades.",
  "natural person": "Pessoa Física — ser humano com personalidade jurídica que começa com o nascimento com vida.",
  "legal capacity": "Aptidão para ser titular de direitos e obrigações (capacidade de direito) e exercê-los (capacidade de fato).",
  "legal act": "Fato jurídico voluntário lícito que produz efeitos jurídicos. Ex: contrato, testamento.",
  "legal fact": "Fato que produz efeitos jurídicos. Pode ser natural (morte) ou humano (contrato).",
  "prescription": "Prescrição — perda do direito de ação pelo decurso do tempo sem exercício. Extingue pretensão.",
  "decadence": "Decadência — perda do direito em si pelo decurso do tempo. Não se interrompe nem suspende.",
  "obligation": "Vínculo jurídico que obriga alguém (devedor) a dar, fazer ou não fazer algo ao credor.",
  "contract": "Acordo de vontades que cria, modifica ou extingue direitos. Requisitos: partes, objeto e forma.",
  "void contract": "Contrato nulo — ineficaz por vício grave (ilicitude, incapacidade absoluta). Não convalida.",
  "voidable contract": "Contrato anulável — pode ser anulado por vício de vontade (erro, dolo, coação). Convalida.",
  "contractual breach": "Inadimplemento — descumprimento de obrigação contratual. Gera responsabilidade e indenização.",
  "damages": "Indenização por danos materiais (emergentes e lucros cessantes) e morais.",
  "tort law": "Responsabilidade Civil — obrigação de indenizar dano causado a outrem. Subjetiva (culpa) ou objetiva.",
  "property law": "Direito das Coisas — posse, propriedade, direitos reais e usucapião.",
  "property law I": "Posse, propriedade e formas de aquisição de bens imóveis e móveis.",
  "property law II": "Direitos reais limitados: servidão, usufruto, uso, habitação, penhor, hipoteca.",
  "usucapion": "Usucapião — aquisição de propriedade pelo exercício continuado e pacífico da posse por prazo legal.",
  "adverse possession": "Equivalente à usucapião no direito anglo-saxão — posse prolongada leva à propriedade.",
  "mortgage": "Hipoteca — direito real de garantia sobre bem imóvel sem transferência da posse.",
  "family law": "Direito de Família — casamento, união estável, regimes de bens, filiação, alimentos e guarda.",
  "marriage": "Casamento — instituição jurídica com direitos e deveres recíprocos. Dissolve-se por divórcio.",
  "divorce": "Dissolução do vínculo matrimonial. No Brasil, pode ser extrajudicial se não há incapazes/menores.",
  "custody": "Guarda dos filhos após separação. Pode ser unilateral ou compartilhada (preferida pelo STJ).",
  "alimony": "Alimentos — prestação para subsistência de pessoa que não pode prover o próprio sustento.",
  "succession law": "Direito das Sucessões — transmissão do patrimônio do falecido aos herdeiros.",
  "inheritance": "Herança — patrimônio transmitido pelo de cujus aos sucessores legítimos e testamentários.",
  "will": "Testamento — ato de última vontade que dispõe do patrimônio para depois da morte.",
  "herdeiro necessário": "Descendentes, ascendentes e cônjuge têm direito à metade da herança (legítima). CC art. 1.845.",

  // ── Direito Penal ──
  "criminal law": "Direito Penal — define crimes, contravenções e aplica penas ou medidas de segurança.",
  "criminal law I": "Parte Geral: princípios, teoria do crime, culpabilidade e aplicação da pena.",
  "criminal law II": "Parte Especial: crimes em espécie (homicídio, furto, estelionato etc.).",
  "crime": "Fato típico, ilícito e culpável. Tipicidade: conduta prevista em lei. Ilicitude: sem excludentes. Culpabilidade: imputável.",
  "felony": "Crime grave com pena elevada. No Brasil: crimes com pena superior a 2 anos.",
  "misdemeanor": "Infração menos grave. No Brasil: contravenção penal com pena de prisão simples ou multa.",
  "homicide": "Homicídio — matar alguém. Simples: art. 121 CP | Qualificado: motivo torpe, cruel ou meio insidioso.",
  "theft": "Furto — subtração de coisa alheia móvel sem violência. Art. 155 CP.",
  "robbery": "Roubo — furto com violência ou grave ameaça. Art. 157 CP. Latrocínio: roubo seguido de morte.",
  "fraud": "Estelionato — obtenção de vantagem ilícita mediante fraude. Art. 171 CP.",
  "self defense": "Legítima defesa — excludente de ilicitude. Reação moderada a agressão injusta atual ou iminente.",
  "necessity": "Estado de necessidade — excludente de ilicitude. Dano a bem alheio para salvar bem próprio maior.",
  "culpability": "Culpabilidade — imputabilidade, consciência da ilicitude e exigibilidade de conduta diversa.",
  "recidivism": "Reincidência — prática de novo crime após condenação transitada em julgado. Agrava a pena.",
  "parole": "Livramento condicional — saída antecipada com condições. Requisito: 1/3 ou 1/2 da pena cumprida.",
  "plea bargain": "Acordo de colaboração processual que reduz pena em troca de informações e confissão.",
  "statute of limitations criminal": "Prescrição penal — extinção da punibilidade pelo decurso do tempo.",
  "doloso": "Crime doloso — agente quis o resultado ou assumiu o risco de produzi-lo (dolo direto ou eventual).",
  "culposo": "Crime culposo — agente causou resultado por imprudência, negligência ou imperícia. Pena menor.",
  "tentativa": "Tentativa — início de execução do crime que não se consumou por circunstâncias alheias à vontade.",

  // ── Processo Civil e Penal ──
  "civil procedure": "Processo Civil — regras para tutela jurisdicional de direitos privados. CPC/2015.",
  "civil procedure I": "Petição inicial, tutela provisória, procedimento comum e recursos.",
  "civil procedure II": "Execução, cumprimento de sentença e procedimentos especiais.",
  "criminal procedure": "Processo Penal — investigação, ação penal, instrução e julgamento. CPP/1941.",
  "criminal procedure I": "Inquérito policial, medidas cautelares e ação penal pública e privada.",
  "criminal procedure II": "Julgamento, recursos, execução penal e medidas alternativas.",
  "lawsuit": "Ação judicial — exercício do direito de ação para obter tutela jurisdicional.",
  "petition": "Petição inicial — peça inaugural que contém partes, fatos, fundamentos e pedido.",
  "jurisdiction": "Jurisdição — poder-dever do Estado de dizer o direito no caso concreto.",
  "competence": "Competência — limitação da jurisdição. Definida por matéria, pessoa, valor e território.",
  "appeal": "Recurso — impugnação de decisão judicial. Apelação, agravo, embargos de declaração, REsp, RE.",
  "evidence": "Prova — meio de demonstrar a veracidade dos fatos alegados no processo.",
  "presumption of innocence": "Presunção de inocência — ninguém é culpado até trânsito em julgado da condenação.",
  "burden of proof": "Ônus da prova — quem alega deve provar. Autor: fatos constitutivos | Réu: extintivos e impeditivos.",
  "injunction": "Tutela de urgência — medida liminar para proteger direito em situação de urgência ou evidência.",
  "contempt of court": "Desacato/descumprimento de ordem judicial. Pode gerar multa coercitiva (astreintes).",
  "class action": "Ação coletiva — defesa de interesses difusos, coletivos ou individuais homogêneos em juízo.",
  "public defender": "Defensoria Pública — instituição que presta assistência jurídica gratuita aos hipossuficientes.",
  "prosecutor": "Ministério Público — defende ordem jurídica, regime democrático e interesses sociais.",
  "attorney": "Advogado — imprescindível à administração da Justiça (CF art. 133). Tem capacidade postulatória.",
  "litigation": "Litigância — tramitação de processo judicial. Litigância de má-fé gera multa processual.",
  "settlement": "Acordo/conciliação — resolução consensual do conflito sem decisão judicial.",
  "arbitration": "Arbitragem — método privado de solução de conflitos com árbitro escolhido pelas partes.",
  "mediation": "Mediação — facilitação do diálogo entre partes para construção do acordo por elas mesmas.",

  // ── Direito do Trabalho ──
  "labor law": "Direito do Trabalho — regulação das relações de emprego e proteção do trabalhador. CLT.",
  "labor law I": "Contrato de trabalho, jornada, remuneração e direitos trabalhistas fundamentais.",
  "labor law II": "Direito coletivo, negociação sindical e processo do trabalho.",
  "employment contract": "Contrato de trabalho — vínculo com pessoalidade, não eventualidade, onerosidade e subordinação.",
  "dismissal": "Dispensa — rescisão contratual. Justa causa: falta grave | Sem justa causa: indenizações.",
  "severance pay": "Verbas rescisórias — FGTS+40%, aviso prévio, saldo de salário, 13º e férias proporcionais.",
  "minimum wage": "Salário mínimo — piso nacional de remuneração mensal. Atualizado anualmente.",
  "overtime": "Hora extra — trabalho além de 8h/dia ou 44h/semana. Acréscimo mínimo de 50%.",
  "vacation": "Férias — 30 dias por ano. 1/3 adicional constitucional. Período aquisitivo de 12 meses.",
  "fgts": "Fundo de Garantia — depósito mensal de 8% do salário. Sacado em dispensa sem justa causa.",
  "union": "Sindicato — entidade de representação coletiva de trabalhadores ou empregadores por categoria.",
  "collective bargaining": "Negociação coletiva — acordo entre sindicato e empresa para condições de trabalho.",
  "strike": "Greve — paralisação coletiva como instrumento de pressão. Direito garantido pela CF art. 9º.",
  "labor court": "Justiça do Trabalho — processa e julga conflitos individuais e coletivos do trabalho. TST.",
  "assédio moral": "Exposição repetida a situações humilhantes e vexatórias no trabalho. Gera indenização.",
  "assédio sexual": "Condicionamento de vantagem a favor sexual. Crime (CP art. 216-A) e causa de justa causa.",

  // ── Direito Tributário ──
  "tax law": "Direito Tributário — criação, arrecadação e fiscalização de tributos. CTN e CF.",
  "tax law I": "Sistema tributário nacional, competência tributária e espécies de tributos.",
  "tax law II": "Contencioso tributário, execução fiscal e planejamento tributário.",
  "tax": "Tributo — prestação compulsória em dinheiro ao Estado sem contraprestação específica.",
  "income tax": "Imposto de Renda — tributo federal sobre acréscimo patrimonial de pessoa física (IRPF) e jurídica (IRPJ).",
  "tax evasion": "Sonegação fiscal — crime de deixar de pagar tributo mediante fraude. Lei 8.137/90.",
  "tax avoidance": "Elisão fiscal — planejamento tributário lícito para reduzir carga tributária.",
  "tax assessment": "Lançamento tributário — ato que constitui o crédito tributário identificando fato gerador e valor.",
  "tax exemption": "Isenção — dispensa legal do pagamento de tributo. Não confundir com imunidade (CF).",
  "tax immunity": "Imunidade — limitação constitucional ao poder de tributar. Ex: imunidade recíproca entre entes.",
  "icms": "Imposto sobre Circulação de Mercadorias e Serviços — imposto estadual. Não cumulativo.",
  "iss": "Imposto sobre Serviços — imposto municipal incidente sobre a prestação de serviços.",
  "ipi": "Imposto sobre Produtos Industrializados — imposto federal sobre industrialização de produtos.",
  "irpf": "Imposto de Renda Pessoa Física — tributo federal sobre rendimentos das pessoas físicas.",
  "contribuição previdenciária": "Contribuição para financiar a Previdência Social. Descontada do salário do empregado.",

  // ── Direito Empresarial ──
  "commercial law": "Direito Comercial/Empresarial — disciplina atos de empresa, sociedades e títulos de crédito.",
  "commercial law I": "Empresário, estabelecimento, títulos de crédito e contratos mercantis.",
  "corporate law": "Direito Societário — tipos de sociedade, constituição, responsabilidade e governança.",
  "corporate law I": "Sociedade Limitada, Anônima: constituição, responsabilidade dos sócios e capital social.",
  "corporate law II": "Operações societárias: fusão, cisão, incorporação e dissolução.",
  "ltda": "Sociedade Limitada — tipo societário com responsabilidade dos sócios limitada ao capital social.",
  "s.a.": "Sociedade Anônima — capital dividido em ações. Aberta (bolsa) ou fechada.",
  "bankruptcy": "Falência — processo judicial de liquidação de empresa insolvente. Lei 11.101/05.",
  "judicial recovery": "Recuperação judicial — reestruturação de empresa viável em crise. Plano de 2 anos.",
  "cheque": "Título de crédito à vista sacado contra banco por quem tem fundos disponíveis.",
  "nota promissória": "Título de crédito que representa promessa de pagamento em data certa.",
  "letra de câmbio": "Título de crédito que representa ordem de pagamento a terceiro.",
  "bill of exchange": "Equivalente à letra de câmbio no direito internacional.",
  "corporate governance": "Práticas de transparência, responsabilidade e equidade na gestão empresarial.",

  // ── Direito Internacional e Digital ──
  "international law": "Direito Internacional Público — normas que regem relações entre Estados e organizações.",
  "private international law": "Direito Internacional Privado — solução de conflitos de leis em relações privadas com elemento estrangeiro.",
  "human rights law": "Direito Internacional dos Direitos Humanos — proteção em tratados e órgãos internacionais.",
  "cyber law": "Direito Digital — crimes cibernéticos, Marco Civil da Internet (Lei 12.965/14) e contratos eletrônicos.",
  "data protection law": "Lei Geral de Proteção de Dados — LGPD (Lei 13.709/18). Equivalente ao GDPR europeu.",
  "lgpd": "Lei Geral de Proteção de Dados — regula coleta, tratamento e compartilhamento de dados pessoais no Brasil.",
  "marco civil da internet": "Lei 12.965/14 — estabelece direitos, deveres e garantias para uso da internet no Brasil.",
  "copyright law": "Direito Autoral — proteção de obras intelectuais. Lei 9.610/98. Vige 70 anos após morte do autor.",
  "patent law": "Patentes — proteção de invenções por prazo determinado. INPI no Brasil. 20 anos para invenção.",
  "trademark law": "Marcas — sinais distintivos registrados no INPI. Proteção por 10 anos, renovável indefinidamente.",
  "intellectual property law": "Propriedade Intelectual — conjunto de direitos sobre criações da mente: patentes, marcas, direitos autorais.",
  "environmental law": "Direito Ambiental — proteção do meio ambiente. CONAMA, IBAMA, licenciamento ambiental.",
  "consumer protection law": "Código de Defesa do Consumidor — Lei 8.078/90. Protege consumidor nas relações de consumo.",
  "gdpr": "General Data Protection Regulation — regulamento europeu de proteção de dados. Referência mundial.",

  // ── Processo e Teoria ──
  "jurisprudence": "Conjunto de decisões reiteradas dos tribunais que orientam a interpretação do direito.",
  "precedent": "Decisão judicial que serve de parâmetro para casos futuros. Stare decisis no common law.",
  "stare decisis": "Princípio do common law de seguir precedentes estabelecidos pelos tribunais superiores.",
  "common law": "Sistema jurídico baseado em precedentes judiciais e costumes. Reino Unido, EUA, Canadá.",
  "civil law system": "Sistema jurídico codificado baseado em leis escritas. Brasil, França, Alemanha.",
  "legal ethics": "Ética profissional do advogado — deveres de lealdade, sigilo, independência e competência. OAB.",
  "legal history": "História do Direito — evolução dos sistemas jurídicos desde o Direito Romano.",
  "comparative law": "Direito Comparado — análise comparativa entre diferentes sistemas e ordenamentos jurídicos.",
  "evidence law": "Provas — meios de prova: documental, testemunhal, pericial, confissão. Licitude e cadeia de custódia.",
  "statute": "Lei — norma jurídica escrita aprovada pelo Poder Legislativo. Hierarquia: CF > LC > LO > decreto.",
  "regulation": "Decreto/Regulamento — norma infralegal que detalha a aplicação da lei. Poder Executivo.",
  "doctrine": "Doutrina — opinião dos juristas sobre interpretação e aplicação do direito. Fonte mediata.",
  "analogy": "Analogia — aplicação de norma de caso semelhante quando não há lei para o caso concreto.",
  "custom": "Costume — prática social reiterada e obrigatória. Fonte do direito quando a lei é omissa.",
  "arbitration and mediation": "Métodos alternativos de resolução de conflitos fora do Judiciário.",
  "public finance": "Finanças Públicas — orçamento, receitas e despesas do Estado. Lei de Responsabilidade Fiscal.",
  "electoral law": "Direito Eleitoral — processo eleitoral, partidos, financiamento e crimes eleitorais. TSE.",
  "immigration law": "Direito Migratório — entrada, permanência e naturalização de estrangeiros. Lei 13.445/17.",
  "health law": "Direito da Saúde — regulação sanitária, ANVISA, bioética e responsabilidade médica.",
  "sports law": "Direito Desportivo — contratos, dopagem, responsabilidade e regulação esportiva.",
  "bankruptcy law": "Lei de Falências e Recuperação Judicial — Lei 11.101/05. Falência e recuperação.",
  "banking law": "Direito Bancário — regulação do SFN, CMN, BACEN e operações bancárias.",
  "insurance law": "Direito dos Seguros — contratos de seguro, SUSEP e regulação do mercado segurador.",
  "notarial and registration law": "Direito Notarial — atos dos tabeliães e registros públicos. Fé pública e autenticidade.",
  "moot court": "Simulação de julgamento para treino de argumentação forense e prática processual.",
  "legal clinic": "Clínica Jurídica — atendimento supervisionado à comunidade. Prática real do estágio.",
  "nevext": "Nevext — criador e administrador deste glossário.",
  "chronokairo": "Chronokairo — liga acadêmica com foco em projetos interdisciplinares de direito e tecnologia.",
  "latij": "Latij — liga acadêmica dedicada a inovação e desenvolvimento de soluções jurídicas.",
};

// ══════════════════════════════════════
//   ESTADO ATUAL
// ══════════════════════════════════════
let currentMode = null;

function getGlossario() {
  if (currentMode === 'tech') return techGlossario;
  if (currentMode === 'law')  return lawGlossario;
  return {};
}

const isResultPage = window.location.pathname.includes('result.html');

// ══════════════════════════════════════
//   BUSCA
// ══════════════════════════════════════
function buscar() {
  const input = document.getElementById('campo-pesquisa');
  const termo = input?.value.trim();
  if (!termo || !currentMode) return;
  window.location.href = `result.html?termo=${encodeURIComponent(termo)}&mode=${currentMode}`;
}

function executarBusca(termo, mode) {
  const glossario = mode === 'tech' ? techGlossario : lawGlossario;
  const otherLabel = mode === 'tech' ? 'Law' : 'Tech';
  termo = termo.toLowerCase().trim();

  const resultados = Object.keys(glossario).filter(chave =>
    chave.toLowerCase().includes(termo) ||
    glossario[chave].toLowerCase().includes(termo)
  );

  const div = document.getElementById('resultados') || document.getElementById('buscar');
  if (!div) return;
  div.classList.add('glossario-list');

  if (resultados.length > 0) {
    div.innerHTML = resultados.map(chave => {
      const id = 'g-' + chave.replace(/[^a-z0-9]/gi, '-').toLowerCase();
      return `<div class="glossario-item" id="${id}">
        <h3 class="glossario-term">${chave}</h3>
        <p class="glossario-definition">${glossario[chave]}</p>
      </div>`;
    }).join('');
  } else {
    const mailto = `mailto:nevext@outlook.com?subject=${encodeURIComponent('Add term: ' + termo)}&body=${encodeURIComponent('Term: ' + termo + '\nVersion: ' + mode.toUpperCase() + '\nDefinition suggestion: ')}`;
    div.innerHTML = `<div class="glossario-item not-found ${mode}-not-found">
      <p>Termo não encontrado no glossário de <strong>${mode === 'law' ? 'Direito' : 'Tecnologia'}</strong>.</p>
      <p>Pode estar disponível na versão <strong>${otherLabel}</strong> — tente trocar de modo.</p>
      <p style="margin-top:12px;">Quer adicionar este termo? <a href="${mailto}" target="_blank">Envie um e-mail ao Nevext</a></p>
    </div>`;
  }
}

// ══════════════════════════════════════
//   RESULT PAGE — redireciona ao trocar modo
// ══════════════════════════════════════
function goToMode(mode) {
  // Na result page, trocar modo volta ao index naquele modo
  localStorage.setItem('glossary-mode', mode);
  window.location.href = 'index.html';
}

// ══════════════════════════════════════
//   INICIALIZAÇÃO
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const inputEl  = document.getElementById('campo-pesquisa');
  const dropdown = document.getElementById('autocomplete-dropdown');
  const botao    = document.getElementById('botao-pesquisa');

  // ── Result page init ──
  if (isResultPage) {
    const params  = new URLSearchParams(window.location.search);
    const termoURL = params.get('termo');
    const modeURL  = params.get('mode');

    if (!termoURL || !modeURL) { window.location.href = 'index.html'; return; }

    // Apply mode class for styling only (no backgrounds)
    currentMode = modeURL;
    document.body.classList.add(modeURL + '-mode');

    // Mark active button
    const btnLaw  = document.getElementById('btn-law');
    const btnTech = document.getElementById('btn-tech');
    if (modeURL === 'law'  && btnLaw)  btnLaw.classList.add('active');
    if (modeURL === 'tech' && btnTech) btnTech.classList.add('active');

    if (inputEl) inputEl.value = termoURL;

    executarBusca(termoURL, modeURL);

    // New search on result page
    if (botao) {
      botao.addEventListener('click', () => {
        const t = inputEl?.value.trim();
        if (t) executarBusca(t, currentMode);
      });
    }
    if (inputEl) {
      inputEl.addEventListener('keydown', e => {
        if (e.key === 'Enter') { const t = inputEl.value.trim(); if (t) executarBusca(t, currentMode); }
      });
    }

    // Autocomplete on result page
    setupAutocomplete(inputEl, dropdown);
    return; // stop here for result page
  }

  // ── Index page init ──
  // Check if coming from result page with saved mode
  const saved = localStorage.getItem('glossary-mode');
  if (saved === 'law' || saved === 'tech') {
    lastModeSwitch = 0;
    setMode(saved, true);
  }

  if (botao) {
    botao.addEventListener('click', buscar);
  }
  if (inputEl) {
    inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') buscar(); });
  }

  setupAutocomplete(inputEl, dropdown);
});

// ══════════════════════════════════════
//   AUTOCOMPLETE
// ══════════════════════════════════════
function setupAutocomplete(inputEl, dropdown) {
  if (!inputEl || !dropdown) return;
  let acIdx = -1;

  inputEl.addEventListener('input', () => {
    const val = inputEl.value.toLowerCase().trim();
    dropdown.innerHTML = '';
    acIdx = -1;
    if (!val || !currentMode) { dropdown.classList.remove('open'); return; }

    const glossario = getGlossario();
    const matches = Object.keys(glossario).filter(k => k.toLowerCase().includes(val)).slice(0, 8);
    if (!matches.length) { dropdown.classList.remove('open'); return; }

    matches.forEach(term => {
      const item = document.createElement('div');
      item.className = 'autocomplete-item';
      const idx = term.toLowerCase().indexOf(val);
      item.innerHTML = term.slice(0, idx) + '<mark>' + term.slice(idx, idx + val.length) + '</mark>' + term.slice(idx + val.length);
      item.addEventListener('mousedown', e => {
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

  inputEl.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.autocomplete-item');
    if (!items.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); acIdx = Math.min(acIdx+1, items.length-1); items.forEach((el,i) => el.classList.toggle('selected', i===acIdx)); if(items[acIdx]) inputEl.value = items[acIdx].textContent; }
    else if (e.key === 'ArrowUp') { e.preventDefault(); acIdx = Math.max(acIdx-1, -1); items.forEach((el,i) => el.classList.toggle('selected', i===acIdx)); if(acIdx>=0&&items[acIdx]) inputEl.value = items[acIdx].textContent; }
    else if (e.key === 'Escape') dropdown.classList.remove('open');
  });

  document.addEventListener('click', e => { if (!e.target.closest('.autocomplete-wrap')) dropdown.classList.remove('open'); });
}

// ══════════════════════════════════════
//   MODE SWITCHING (index only)
// ══════════════════════════════════════
let lastModeSwitch = 0;
const COOLDOWN_MS  = 10000;
let cooldownTimer  = null;

function setMode(mode, skipCooldown) {
  const now = Date.now();
  if (!skipCooldown && lastModeSwitch > 0 && (now - lastModeSwitch) < COOLDOWN_MS) {
    showCooldownToast(Math.ceil((COOLDOWN_MS - (now - lastModeSwitch)) / 1000));
    return;
  }
  lastModeSwitch = now;

  // Fade overlay
  let overlay = document.getElementById('fade-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'fade-overlay';
    overlay.className = 'fade-overlay';
    document.body.appendChild(overlay);
  }
  overlay.classList.add('active');

  setTimeout(() => {
    applyModeVisuals(mode);
    localStorage.setItem('glossary-mode', mode);
    setTimeout(() => overlay.classList.remove('active'), 60);
  }, 300);
}

function applyModeVisuals(mode) {
  currentMode = mode;
  const body  = document.body;
  const dama  = document.getElementById('dama-wrap');
  const lawBadge       = document.getElementById('law-badge');
  const cornerInfo     = document.getElementById('corner-info');
  const techBadge      = document.getElementById('tech-badge');
  const cornerInfoTech = document.getElementById('corner-info-tech');
  const btnLaw  = document.getElementById('btn-law');
  const btnTech = document.getElementById('btn-tech');
  const searchInput = document.getElementById('campo-pesquisa');
  const searchBtn   = document.getElementById('botao-pesquisa');

  if (searchInput) { searchInput.disabled = false; searchInput.placeholder = 'Type your question...'; }
  if (searchBtn)   searchBtn.disabled = false;

  if (mode === 'law') {
    body.classList.add('law-mode');
    body.classList.remove('tech-mode');

    if (dama) { dama.classList.add('visible'); setTimeout(() => dama.classList.add('fadein'), 50); }
    if (lawBadge)   { lawBadge.style.display = 'block';   setTimeout(() => lawBadge.style.opacity   = '1', 50); }
    if (cornerInfo) { cornerInfo.style.display = 'block'; setTimeout(() => cornerInfo.style.opacity = '1', 50); }
    if (techBadge)       { techBadge.style.opacity = '0';       setTimeout(() => techBadge.style.display       = 'none', 400); }
    if (cornerInfoTech)  { cornerInfoTech.style.opacity = '0';  setTimeout(() => cornerInfoTech.style.display  = 'none', 400); }

    if (btnLaw)  btnLaw.classList.add('active');
    if (btnTech) btnTech.classList.remove('active');

  } else {
    body.classList.add('tech-mode');
    body.classList.remove('law-mode');

    if (dama) { dama.classList.remove('fadein'); setTimeout(() => dama.classList.remove('visible'), 400); }
    if (lawBadge)   { lawBadge.style.opacity = '0';   setTimeout(() => lawBadge.style.display   = 'none', 400); }
    if (cornerInfo) { cornerInfo.style.opacity = '0'; setTimeout(() => cornerInfo.style.display = 'none', 400); }
    if (techBadge)       { techBadge.style.display = 'block';       setTimeout(() => techBadge.style.opacity       = '1', 50); }
    if (cornerInfoTech)  { cornerInfoTech.style.display = 'block';  setTimeout(() => cornerInfoTech.style.opacity  = '1', 50); }

    if (btnTech) btnTech.classList.add('active');
    if (btnLaw)  btnLaw.classList.remove('active');
  }
}

function showCooldownToast(seconds) {
  const toast = document.getElementById('cooldown-toast');
  const secEl = document.getElementById('cooldown-seconds');
  if (!toast) return;
  if (cooldownTimer) clearInterval(cooldownTimer);
  let rem = seconds;
  if (secEl) secEl.textContent = rem;
  toast.classList.add('visible');
  cooldownTimer = setInterval(() => {
    rem--;
    if (secEl) secEl.textContent = rem;
    if (rem <= 0) { clearInterval(cooldownTimer); toast.classList.remove('visible'); }
  }, 1000);
}