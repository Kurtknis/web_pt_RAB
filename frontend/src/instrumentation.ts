import { initializeMonitoring, reportServerError } from "@/services/monitoring";

const sentryEnabled = Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);

export async function register() {
  if (sentryEnabled && process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (sentryEnabled && process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }

  initializeMonitoring();
}

export function onRequestError(error: unknown, request: unknown, context: unknown) {
  if (sentryEnabled) {
    import("@sentry/nextjs")
      .then((Sentry) =>
        Sentry.captureRequestError(
          error,
          request as Parameters<typeof Sentry.captureRequestError>[1],
          context as Parameters<typeof Sentry.captureRequestError>[2],
        ),
      )
      .catch(() => undefined);
  }

  reportServerError(error, {
    request,
    context,
  });
}
