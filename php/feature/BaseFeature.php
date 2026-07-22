<?php
declare(strict_types=1);

// OpenDataHub SDK base feature

class OpenDataHubBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(OpenDataHubContext $ctx, array $options): void {}
    public function PostConstruct(OpenDataHubContext $ctx): void {}
    public function PostConstructEntity(OpenDataHubContext $ctx): void {}
    public function SetData(OpenDataHubContext $ctx): void {}
    public function GetData(OpenDataHubContext $ctx): void {}
    public function GetMatch(OpenDataHubContext $ctx): void {}
    public function SetMatch(OpenDataHubContext $ctx): void {}
    public function PrePoint(OpenDataHubContext $ctx): void {}
    public function PreSpec(OpenDataHubContext $ctx): void {}
    public function PreRequest(OpenDataHubContext $ctx): void {}
    public function PreResponse(OpenDataHubContext $ctx): void {}
    public function PreResult(OpenDataHubContext $ctx): void {}
    public function PreDone(OpenDataHubContext $ctx): void {}
    public function PreUnexpected(OpenDataHubContext $ctx): void {}
}
