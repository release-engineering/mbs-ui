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

export interface MbsModuleShort {
    context?: string;
    id: number;
    name: string;
    state: number;
    state_name: string;
    stream: string;
    version: string;
}

export interface MbsModule extends MbsModuleShort {
    koji_tag: string;
    owner: string;
    rebuild_strategy: string;
    scmurl: string | undefined;
    state_reason: string | undefined;
    tasks: any;
    time_completed: string | undefined;
    time_modified: string | undefined;
    time_submitted: string;
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

export interface MbsModulesShortApi extends MbsApi {
    items: Array<MbsModuleShort>;
}

export interface MbsComponentsApi extends MbsApi {
    items: Array<MbsComponent>;
}
