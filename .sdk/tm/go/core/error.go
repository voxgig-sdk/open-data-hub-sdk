package core

type OpenDataHubError struct {
	IsOpenDataHubError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOpenDataHubError(code string, msg string, ctx *Context) *OpenDataHubError {
	return &OpenDataHubError{
		IsOpenDataHubError: true,
		Sdk:              "OpenDataHub",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OpenDataHubError) Error() string {
	return e.Msg
}
