export const EDAM_START_TERMS = Object.freeze(
    [
        {
            title: 'Genetics',
            description: 'Resources for the study of <a href="https://en.wikipedia.org/wiki/Gene" target="_blank">genes</a> and <a href="https://en.wikipedia.org/wiki/Heredity" target="_blank">heredity</a> in living organisms. They provide analytical approaches for studying <a href="https://en.wikipedia.org/wiki/Gene_structure" target="_blank">gene structure</a>, <a href="https://en.wikipedia.org/wiki/Genetic_variation" target="_blank">genetic variation</a>, the <a href="https://en.wikipedia.org/wiki/Regulation_of_gene_expression" target="_blank">regulation of gene expression</a> and the relationships between organism <a href="https://en.wikipedia.org/wiki/Genotype%E2%80%93phenotype_distinction" target="_blank">genotype and phenotype</a>.',
            icon: 'genetics',
            subTerms: [
                {
                    name: 'Genetics',
                    type: 't',
                    uri: 'topic_3053'
                },
                {
                    name: 'Gene expression',
                    type: 't',
                    uri: 'topic_0203'
                },
                {
                    name: 'Gene regulation',
                    type: 't',
                    uri: 'topic_0204'
                },
                {
                    name: 'Gene expression profiling',
                    type: 'o',
                    uri: 'operation_0314'
                },
                {
                    name: 'Expression analysis',
                    type: 'o',
                    uri: 'operation_2495'
                },
                {
                    name: 'Transcription factors and regulatory sites',
                    type: 't',
                    uri: 'topic_0749'
                },
                {
                    name: 'Functional, regulatory and non-coding RNA',
                    type: 't',
                    uri: 'topic_0659'
                },
                {
                    name: 'Genetic variation',
                    type: 't',
                    uri: 'topic_0199'
                },
                {
                    name: 'DNA polymorphism',
                    type: 't',
                    uri: 'topic_2885'
                },
                {
                    name: 'Genotyping',
                    type: 'o',
                    uri: 'operation_3196'
                },
                {
                    name: 'Genotype and phenotype',
                    type: 't',
                    uri: 'topic_0625'
                },
                {
                    name: 'Population genetics',
                    type: 't',
                    uri: 'topic_3056'
                },
                {
                    name: 'Gene functional annotation',
                    type: 'o',
                    uri: 'operation_3672'
                },
                {
                    name: 'Gene and protein families',
                    type: 't',
                    uri: 'topic_0623'
                },
                {
                    name: 'Gene prediction',
                    type: 'o',
                    uri: 'operation_2454'
                },
                {
                    name: 'Enrichment analysis',
                    type: 'o',
                    uri: 'operation_3501'
                },
                {
                    name: 'Genome visualisation',
                    type: 'o',
                    uri: 'operation_3208'
                }

            ]
        },
        {
            title: 'Proteins',
            description: 'Resources for protein <a href="https://en.wikipedia.org/wiki/Sequence_analysis" target="_blank">sequence analysis</a>, protein <a href="https://en.wikipedia.org/wiki/Molecular_graphics" target="_blank">visualization</a>, and the <a href="https://en.wikipedia.org/wiki/Protein_structure_prediction" target="_blank">prediction</a>, <a href="https://en.wikipedia.org/wiki/Homology_modeling" target="_blank">modelling</a> and analysis of protein structure. They provide analytical approaches to interpret and explore  protein <a href="https://en.wikipedia.org/wiki/Protein_primary_structure" target="_blank">sequence</a> and  <a href="https://en.wikipedia.org/wiki/Protein_structure" target="_blank">structure</a> data, and to understand protein <a href="https://en.wikipedia.org/wiki/Protein#Cellular_functions" target="_blank">function</a> and mechanism of action.',
            icon: 'proteins',
            subTerms: [
                {
                    name: 'Protein sequence analysis',
                    type: 'o',
                    uri: 'operation_2479'
                },
                {
                    name: 'Protein structure analysis',
                    type: 'o',
                    uri: 'operation_2406'
                },
                {
                    name: 'Protein folds and structural domains',
                    type: 't',
                    uri: 'topic_0736'
                },
                {
                    name: 'Gene and protein families',
                    type: 't',
                    uri: 'topic_0623'
                },
                {
                    name: 'Protein structural motifs and surfaces',
                    type: 't',
                    uri: 'topic_0166'
                },
                {
                    name: 'Protein sites, features and motifs',
                    type: 't',
                    uri: 'topic_3510'
                },
                {
                    name: 'Transcription factors and regulatory sites',
                    type: 't',
                    uri: 'topic_0749'
                },
                {
                    name: 'Protein interactions',
                    type: 't',
                    uri: 'topic_0128'
                },
                {
                    name: 'Protein modelling',
                    type: 'o',
                    uri: 'operation_0477'
                },
                {
                    name: 'Protein fold recognition',
                    type: 'o',
                    uri: 'operation_0303'
                },
                {
                    name: 'Protein structure prediction',
                    type: 'o',
                    uri: 'operation_0474'
                },
                {
                    name: 'Protein secondary structure prediction',
                    type: 'o',
                    uri: 'operation_0267'
                },
                {
                    name: 'Protein binding site prediction',
                    type: 'o',
                    uri: 'operation_2575'
                },
                {
                    name: 'Protein property calculation',
                    type: 'o',
                    uri: 'operation_0250'
                },
                {
                    name: 'Protein subcellular localisation prediction',
                    type: 'o',
                    uri: 'operation_2489'
                },
                {
                    name: 'Protein folding, stability and design',
                    type: 't',
                    uri: 'topic_0130'
                }
            ]
        },
        {
            title: 'Nucleic acids',
            description: 'Resources for the processing and analysis of <a href="https://en.wikipedia.org/wiki/Nucleic_acid_sequence" target="_blank">nucleic acid sequence</a>, <a href="https://en.wikipedia.org/wiki/Nucleic_acid_structure" target="_blank">structural</a> and other data. They provide analytical methods to interpret and explore nucleic acid sequence and structural data in context of <a href="https://en.wikipedia.org/wiki/Gene_structure" target="_blank">gene structure</a>, <a href="https://en.wikipedia.org/wiki/Genetic_variation" target="_blank">genetic variation</a>, and the <a href="https://en.wikipedia.org/wiki/Regulation_of_gene_expression" target="_blank">regulation of gene expression</a>.',
            icon: 'nucleic-acids',
            subTerms: [
                {
                    name: 'DNA',
                    type: 't',
                    uri: 'topic_0654'
                },
                {
                    name: 'RNA',
                    type: 't',
                    uri: 'topic_0099'
                },
                {
                    name: 'Genetic mapping',
                    type: 'o',
                    uri: 'operation_0282'
                },
                {
                    name: 'Read mapping',
                    type: 'o',
                    uri: 'operation_3198'
                },
                {
                    name: 'Functional, regulatory and non-coding RNA',
                    type: 't',
                    uri: 'topic_0659'
                },
                {
                    name: 'Methylation analysis',
                    type: 'o',
                    uri: 'operation_3204'
                },
                {
                    name: 'DNA polymorphism',
                    type: 't',
                    uri: 'topic_2885'
                },
                {
                    name: 'SNP detection',
                    type: 'o',
                    uri: 'operation_0484'
                },
                {
                    name: 'Nucleic acid sequence analysis',
                    type: 'o',
                    uri: 'operation_2478'
                },
                {
                    name: 'Nucleic acid sites, features and motifs',
                    type: 't',
                    uri: 'topic_3511'
                },
                {
                    name: 'Nucleic acid feature detection',
                    type: 'o',
                    uri: 'operation_0415'
                },
                {
                    name: 'Transcription factor binding site prediction',
                    type: 'o',
                    uri: 'operation_0445'
                },
                {
                    name: 'Transcription factors and regulatory sites',
                    type: 't',
                    uri: 'topic_0749'
                },
                {
                    name: 'Transcriptional regulatory element prediction',
                    type: 'o',
                    uri: 'operation_0438'
                },
                {
                    name: 'Nucleic acid structure analysis',
                    type: 'o',
                    uri: 'operation_2481'
                },
                {
                    name: 'RNA secondary structure prediction',
                    type: 'o',
                    uri: 'operation_0278'
                }
            ]
        },
        {
            title: 'Sequence analysis',
            description: 'Resources for the processing and analysis of <a href="https://en.wikipedia.org/wiki/Biomolecular_structure" target="_blank">molecular structure</a> data including the <a href="https://en.wikipedia.org/wiki/Protein_structure_prediction" target="_blank">prediction</a> and <a href="https://en.wikipedia.org/wiki/Homology_modeling" target="_blank">modelling</a> of protein structure and <a href="https://en.wikipedia.org/wiki/Interactome" target="_blank">interactions</a> between <a href="https://en.wikipedia.org/wiki/Nucleic_acid_structure" target="_blank">nucleic acids</a>, <a href="https://en.wikipedia.org/wiki/Protein_structure" target="_blank">proteins</a> and <a href="https://en.wikipedia.org/wiki/Small_molecule" target="_blank">small molecules</a>.',
            icon: 'sequence-analysis',
            subTerms: [
                {
                    name: 'Sequence sites, features and motifs',
                    type: 't',
                    uri: 'topic_0160'
                },
                {
                    name: 'Sequence similarity search',
                    type: 'o',
                    uri: 'operation_0346'
                },
                {
                    name: 'Sequence alignment',
                    type: 'o',
                    uri: 'operation_0292'
                },
                {
                    name: 'Sequence motif recognition',
                    type: 'o',
                    uri: 'operation_0239'
                },
                {
                    name: 'Sequence annotation',
                    type: 'o',
                    uri: 'operation_0361'
                },
                {
                    name: 'Sequence visualisation',
                    type: 'o',
                    uri: 'operation_0564'
                },
                {
                    name: 'Nucleic acid sequence analysis',
                    type: 'o',
                    uri: 'operation_2478'
                },
                {
                    name: 'Nucleic acid feature detection',
                    type: 'o',
                    uri: 'operation_0415'
                },
                {
                    name: 'Transcription factors and regulatory sites',
                    type: 't',
                    uri: 'topic_0749'
                },
                {
                    name: 'Protein sequence analysis',
                    type: 'o',
                    uri: 'operation_2479'
                },
                {
                    name: 'Protein feature detection',
                    type: 'o',
                    uri: 'operation_3092'
                },
                {
                    name: 'Sequence assembly',
                    type: 't',
                    uri: 'topic_0196'
                },
                {
                    name: 'Mapping',
                    type: 't',
                    uri: 'topic_0102'
                },
                {
                    name: 'Genome annotation',
                    type: 'o',
                    uri: 'operation_0362'
                },
                {
                    name: 'PCR primer design',
                    type: 'o',
                    uri: 'operation_0308'
                },
                {
                    name: 'Phylogenetics',
                    type: 't',
                    uri: 'topic_3293'
                }
            ]
        },
        {
            title: 'Structure analysis',
            description: 'Resources for the processing and analysis of <a href="https://en.wikipedia.org/wiki/Biomolecular_structure" target="_blank">molecular structure</a> data including the <a href="https://en.wikipedia.org/wiki/Protein_structure_prediction" target="_blank">prediction</a> and <a href="https://en.wikipedia.org/wiki/Homology_modeling" target="_blank">modelling</a> of protein structure and <a href="https://en.wikipedia.org/wiki/Interactome" target="_blank">interactions</a> between <a href="https://en.wikipedia.org/wiki/Nucleic_acid_structure" target="_blank">nucleic acids</a>, <a href="https://en.wikipedia.org/wiki/Protein_structure" target="_blank">proteins</a> and <a href="https://en.wikipedia.org/wiki/Small_molecule" target="_blank">small molecules</a>.',
            icon: 'structure-analysis',
            subTerms: [
                {
                    name: 'Structure analysis',
                    type: 't',
                    uri: 'topic_0081'
                },
                {
                    name: 'Molecular modelling',
                    type: 't',
                    uri: 'topic_2275'
                },
                {
                    name: 'Molecular docking',
                    type: 'o',
                    uri: 'operation_0478'
                },
                {
                    name: 'Molecular dynamics',
                    type: 't',
                    uri: 'topic_0176'
                },
                {
                    name: 'Structure prediction',
                    type: 't',
                    uri: 'topic_0082'
                },
                {
                    name: 'Structure visualisation',
                    type: 'o',
                    uri: 'operation_0570'
                },
                {
                    name: 'Protein structure analysis',
                    type: 't',
                    uri: 'topic_2814'
                },
                {
                    name: 'Protein folds and structural domains',
                    type: 't',
                    uri: 'topic_0736'
                },
                {
                    name: 'Protein structural motifs and surfaces',
                    type: 't',
                    uri: 'topic_0166'
                },
                {
                    name: 'Protein modelling',
                    type: 'o',
                    uri: 'operation_0477'
                },
                {
                    name: 'Protein model validation',
                    type: 'o',
                    uri: 'operation_0321'
                },
                {
                    name: 'Protein structure prediction',
                    type: 'o',
                    uri: 'operation_0474'
                },
                {
                    name: 'Protein secondary structure prediction',
                    type: 'o',
                    uri: 'operation_0267'
                },
                {
                    name: 'Nucleic acid structure analysis',
                    type: 'o',
                    uri: 'operation_2481'
                },
                {
                    name: 'RNA secondary structure prediction',
                    type: 'o',
                    uri: 'operation_0278'
                },
                {
                    name: 'Small molecules',
                    type: 't',
                    uri: 'topic_0154'
                }
            ]
        },
        {
            title: 'Omics',
            description: 'Resources for the processing and analysis of the collective characterisation and quantification of pools of biological molecules that translate into the structure, function, and dynamics of an organism or organisms.',
            icon: 'omics',
            subTerms: [
                {
                    name: 'Genomics',
                    type: 't',
                    uri: 'topic_0622'
                },
                {
                    name: 'Functional genomics',
                    type: 't',
                    uri: 'topic_0085'
                },
                {
                    name: 'Comparative genomics',
                    type: 't',
                    uri: 'topic_0797'
                },
                {
                    name: 'Population genomics',
                    type: 't',
                    uri: 'topic_3796'
                },
                {
                    name: 'Phylogenomics',
                    type: 't',
                    uri: 'topic_0194'
                },
                {
                    name: 'Metagenomics',
                    type: 't',
                    uri: 'topic_3174'
                },
                {
                    name: 'Transcriptomics',
                    type: 't',
                    uri: 'topic_3308'
                },
                {
                    name: 'Epigenomics',
                    type: 't',
                    uri: 'topic_3173'
                },
                {
                    name: 'Proteomics',
                    type: 't',
                    uri: 'topic_0121'
                },
                {
                    name: 'Structural genomics',
                    type: 't',
                    uri: 'topic_0122'
                },
                {
                    name: 'Metabolomics',
                    type: 't',
                    uri: 'topic_3172'
                },
                {
                    name: 'Pharmacogenomics',
                    type: 't',
                    uri: 'topic_0208'
                },
                {
                    name: 'Phenomics',
                    type: 't',
                    uri: 'topic_3298'
                }
            ]
        },
        {
            title: 'Other',
            description: 'Other popular concepts.',
            icon: 'other',
            subTerms: [
                {
                    name: 'Sequencing',
                    type: 't',
                    uri: 'topic_3168'
                },
                {
                    name: 'Sequencing quality control',
                    type: 'o',
                    uri: 'operation_3218'
                },
                {
                    name: 'Sequence assembly',
                    type: 'o',
                    uri: 'operation_0310'
                },
                {
                    name: 'Genome annotation',
                    type: 'o',
                    uri: 'operation_0362'
                },
                {
                    name: 'Systems biology',
                    type: 't',
                    uri: 'topic_2259'
                },
                {
                    name: 'Cell biology',
                    type: 't',
                    uri: 'topic_2229'
                },
                {
                    name: 'Molecular interactions, pathways and networks',
                    type: 't',
                    uri: 'topic_0602'
                },
                {
                    name: 'Pathway or network prediction',
                    type: 'o',
                    uri: 'operation_3439'
                },
                {
                    name: 'Pathway or network visualisation',
                    type: 'o',
                    uri: 'operation_3083'
                },
                {
                    name: 'Phylogeny',
                    type: 't',
                    uri: 'topic_0084'
                },
                {
                    name: 'Pathology',
                    type: 't',
                    uri: 'topic_0634'
                },
                {
                    name: 'Oncology',
                    type: 't',
                    uri: 'topic_2640'
                },
                {
                    name: 'Formatting',
                    type: 'o',
                    uri: 'operation_0335'
                },
                {
                    name: 'Machine learning',
                    type: 't',
                    uri: 'topic_3474'
                },
                {
                    name: 'Image analysis',
                    type: 'o',
                    uri: 'operation_3443'
                },
                {
                    name: 'Spectral analysis',
                    type: 'o',
                    uri: 'operation_3214'
                }
            ]
        }
    ]
);
