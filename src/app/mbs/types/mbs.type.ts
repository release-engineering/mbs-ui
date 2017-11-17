interface MbsMetaApi {
    first: string;
    last: string;
    next: string | undefined; 
    page: number;
    pages: number;
    per_page: number;
    prev: number | undefined;
    total: number;
}

interface MbsApi {
    items: Array<any>;
    meta: MbsMetaApi;
}

export interface MbsModule {
    id: number;
    koji_tag: string;
    name: string;
    owner: string;
    rebuild_strategy: string;
    scmurl: string | undefined;
    state: number;
    state_name: string;
    state_reason: string | undefined;
    stream: string;
    tasks: any;
    time_completed: string | undefined;
    time_modified: string | undefined;
    time_submitted: string;
    version: string;
}

export interface MbsComponent {
    id: number;
    format: string;
    module_build: number;
    package: string;
    state: number;
    state_name: string;
    task_id: number;
}

export interface MbsModulesApi extends MbsApi {
    items: Array<MbsModule>
}

export interface MbsComponentsApi extends MbsApi {
    items: Array<MbsComponent>;
}
