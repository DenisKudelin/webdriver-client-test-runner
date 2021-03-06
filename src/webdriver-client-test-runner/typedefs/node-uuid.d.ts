﻿declare module nodeUUID {
    interface UUIDOptions {

        /**
            * Node id as Array of 6 bytes (per 4.1.6).
            * Default: Randomly generated ID. See note 1.
            */
        node?: any[];

        /**
            * (Number between 0 - 0x3fff) RFC clock sequence.
            * Default: An internally maintained clockseq is used.
            */
        clockseq?: number;

        /**
            * (Number | Date) Time in milliseconds since unix Epoch.
            * Default: The current time is used.
            */
        msecs?: number|Date;

        /**
            * (Number between 0-9999) additional time, in 100-nanosecond units. Ignored if msecs is unspecified.
            * Default: internal uuid counter is used, as per 4.2.1.2.
            */
        nsecs?: number;
    }

    export function v1(options?: UUIDOptions): string;
    export function v1(options?: UUIDOptions, buffer?: number[], offset?: number): number[];

    export function v4(options?: UUIDOptions): string;
    export function v4(options?: UUIDOptions, buffer?: number[], offset?: number): number[];

    export function parse(id: string, buffer?: number[], offset?: number): number[];

    export function unparse(buffer: number[], offset?: number): string;
}

declare module "node-uuid" {
    export = nodeUUID;
}