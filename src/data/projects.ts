export interface Project {
  id: string
  name: string
  title: string
  description: string
  meta: string
  variant: number
  url?: string
}

export const projects: Project[] = [
  {
    id: 'projeto-1',
    name: 'Projeto 1',
    title: 'Site Portfólio de Arquitetura',
    description: 'Site completo para exibição de portfólio de arquitetura, com galerias de imagens e integração com redes sociais.',
    meta: '',
    variant: 1,
    url: 'https://brunacamara-arq.com.br/'
  },
  {
    id: 'projeto-2',
    name: 'Projeto 2',
    title: 'Campanha Digital para prestador de serviço',
    description: 'Campanha de SEO e marketing digital para aumentar a visibilidade online de um prestador de serviços, resultando em maior tráfego e conversões.',
    meta: '',
    variant: 2,
    url: '#'
  },
  {
    id: 'projeto-3',
    name: 'Projeto 3',
    title: 'Digitalização de Processos Internos',
    description: 'Sistema de digitalização de processos, permitindo a automação de tarefas internas e a redução de papelada, aumentando a eficiência operacional.',
    meta: '',
    variant: 3,
    url: '#'
  }
]
